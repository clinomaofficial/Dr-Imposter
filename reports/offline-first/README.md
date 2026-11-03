# Offline-first Firebase changes

Local play is free and does not acquire a Firestore network connection. Guest
and signed-in scores, penalties, profile edits and optional public content are
stored locally. The settings menu has an explicit **Update data & sync scores**
action. There is no automatic content polling or per-ad impression cloud write.

The service worker caches all build chunks, bundled fonts, images and sounds
before installation completes. Lazy game modes can therefore open for the
first time while offline after the initial install. External sponsor media is
not part of this guarantee. Android packages contain the bundled game assets.

## Cloud operations

- Opening the local game does not read the health-check document, attach global
  Firestore listeners, or write `lastLogin`.
- Public data refresh reads at most 25 active ads, one announcement and one
  settings document. Old cached content remains available if refresh fails.
- `lastLogin` updates at most once per 24 hours during explicit account sync.
- Local score changes accumulate per device. A transaction stores the device's
  net contribution and the account total together. Repeating an acknowledged
  upload cannot duplicate points, and concurrent local points/penalties survive
  the upload. This is synchronization, not a cheat-proof competitive backend.
- Leaderboards cache 25 rows for 24 hours. Online room discovery returns at most
  25 unexpired lobbies. The admin panel's listeners only run on relevant tabs.
- Live room access is leased only while in a room. Joining, voting and duel
  guesses use transactions; a bounded fresh-transaction retry handles conflicts
  reported as authorization failure against a newly changed roster/ballot.
- Rooms expire after two hours. A deliberate host departure deletes the room;
  leaving an active match closes it to avoid an unfinishable match. Closing a
  browser/crashing cannot guarantee a departure write. Expiry blocks updates
  and removes rooms from discovery; it does not itself delete stored documents.
  `scripts/admin/cleanup-expired-rooms.mjs` is optional bounded, dry-run-first
  maintenance. It was **not run against production**. TTL requires billing and
  has not been enabled.

## Security and free access

Online guests use Firebase Anonymous Authentication, created only when an
online feature is requested. Room IDs are bound to Firebase UIDs, live room
reads are member-only, joins cannot replace existing players, and non-host
votes/duel guesses can only modify the caller's entry. A room host remains the
authority for its own game; this client-hosted design is not an anti-cheat
server. Room contents, including secret words, are available to authorized
members at SDK level. App Check supplements these rules; it is not rate limiting.

User creation cannot grant an administrative role, and ordinary profile edits
cannot change permissions. Existing admin roles/claims are preserved; new owner
roles must be provisioned through trusted administration. Subscription lookup
and UI gates were removed. Legacy compatibility fields remain in old profile
documents/types without controlling gameplay.

## Production setup still required

No production deployment, billing upgrade, provider toggle, or App Check
enforcement was performed. Release client and matching rules together:

1. Enable **Anonymous** sign-in in Firebase Authentication for optional online
   guests. Google account sign-in remains optional for local play.
2. Review and deploy `firestore.rules` and `firestore.indexes.json` using the
   intended project. Existing open rooms from the old schema should be replaced
   by new rooms. `firebase.local.json` is for local emulators, not production.
3. If using App Check, register the web app/domains with reCAPTCHA Enterprise and
   supply `VITE_FIREBASE_APPCHECK_SITE_KEY` at build time. Client initialization
   is deferred until online access. Verify tokens before enabling enforcement;
   Android/Capacitor provider/domain setup must also be validated. No site key
   or enforcement is fabricated by the code.
4. Monitor actual Firebase usage. Local matches do not need Blaze. Web hosting
   still transfers the initial approximately 7 MB asset installation; APK
   distribution and repeated cached play have different bandwidth profiles.

Announcements/configuration now reach players on manual refresh. Ad impression
and click counts are local, so admin cloud analytics no longer receive those
events. This is intentional to avoid per-play Firestore traffic.

## Reproducible checks

```powershell
npm run lint
npm run build -- --outDir .shots/offline-delivery-build
node --import tsx scripts/local-score.test.ts
python scripts/offline-match-measure.py
```

The isolated build directory avoids a pre-existing Windows lock on `dist/sounds`
encountered during an earlier default build. Nothing outside the build output
was removed to work around it.

With Java 21 on PATH, start the demo emulators:

```powershell
firebase emulators:start --only firestore,auth --config firebase.local.json --project demo-clinoma-offline
node --import tsx scripts/offline-rules.test.mjs
```

For the actual three-player browser UI check, also run Vite with
`VITE_USE_FIREBASE_EMULATORS=true`, `VITE_FIREBASE_PROJECT_ID=demo-clinoma-offline`,
`DISABLE_HMR=true`, port 4010, then run `python scripts/online-match-emulator.py`.
Disabling HMR prevents generated test reports from reloading the test match.

`match-measurement.json` records a real production-browser solo win, a second
round with a penalty, offline reloads, cache inventory and cloud requests.
The 25 rule checks run against the demo emulator, not production. Chromium's
own service-worker update checks bypass Playwright's offline emulation and are
reported separately; they are not game-asset or Firebase traffic. These tests
do not constitute a 100,000-user load test or a Firebase billing-console audit.

The updated `Clinoma-Games.apk` was assembled successfully with the existing
Android release signing configuration. ZIP integrity and all 60 current web
build files inside the APK were verified against the tested delivery build.
Android device installation/UI was not tested; the actual match tests ran in
Chromium. The web `dist` and packaged Android entry points match the delivery
build. Generated development reports/build directories are excluded from the
Vite watcher to avoid Windows file-lock errors and unintended match reloads.
