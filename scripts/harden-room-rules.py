from pathlib import Path
p=Path('firestore.rules')
s=p.read_text(encoding='utf-8')
start=s.index('    // ============ MULTIPLAYER ROOMS')
end=s.index('    match /users/{userId}',start)
s=s[:start]+'''    // Rooms require a Firebase identity (anonymous identities are sufficient).
    match /rooms/{roomId} {
      function member() {
        return isSignedIn() && request.auth.uid in existing().memberIds;
      }
      function live() { return existing().expiresAt > request.time.toMillis(); }
      function changed() { return incoming().diff(existing()).affectedKeys(); }
      function playerAt(i) {
        return incoming().players.size() <= i || (
          incoming().players[i].id == incoming().memberIds[i] &&
          incoming().players[i].name is string && incoming().players[i].name.size() <= 40 &&
          incoming().players[i].score is number && incoming().players[i].score >= 0 &&
          incoming().players[i].role in ['NORMAL', 'IMPOSTER'] &&
          incoming().players[i].assignedWordId is string
        );
      }
      function validRoster() {
        return incoming().players is list && incoming().memberIds is list &&
          incoming().players.size() == incoming().memberIds.size() &&
          incoming().memberIds.toSet().size() == incoming().memberIds.size() &&
          incoming().players.size() >= 1 && incoming().players.size() <= incoming().maxPlayers &&
          playerAt(0) && playerAt(1) && playerAt(2) && playerAt(3) && playerAt(4) &&
          playerAt(5) && playerAt(6) && playerAt(7) && playerAt(8) && playerAt(9);
      }
      function joining() {
        return existing().status == 'LOBBY' && !(request.auth.uid in existing().memberIds) &&
          changed().hasOnly(['players', 'memberIds']) &&
          incoming().memberIds == existing().memberIds.concat([request.auth.uid]) &&
          incoming().players.size() == existing().players.size() + 1 &&
          incoming().players == existing().players.concat([incoming().players[existing().players.size()]]) &&
          incoming().players[existing().players.size()].score == 0 &&
          incoming().players[existing().players.size()].role == 'NORMAL' &&
          incoming().players[existing().players.size()].assignedWordId == '';
      }
      function leaving() {
        return member() && existing().status == 'LOBBY' && request.auth.uid != existing().hostId &&
          changed().hasOnly(['players', 'memberIds']) &&
          incoming().memberIds == existing().memberIds.removeAll([request.auth.uid]) &&
          incoming().players.size() == existing().players.size() - 1 &&
          incoming().players.toSet().difference(existing().players.toSet()).size() == 0;
      }
      function voting() {
        return member() && existing().status == 'VOTING' &&
          changed().hasOnly(['votes', 'status', 'votedOutPlayerId']) &&
          !(request.auth.uid in existing().votes) &&
          incoming().votes.diff(existing().votes).affectedKeys().hasOnly([request.auth.uid]) &&
          incoming().votes[request.auth.uid] in existing().memberIds &&
          ((incoming().votes.size() < existing().players.size() && incoming().status == 'VOTING' &&
            !changed().hasAny(['votedOutPlayerId'])) ||
           (incoming().votes.size() == existing().players.size() && incoming().status == 'REVEALED' &&
            incoming().votedOutPlayerId in existing().memberIds));
      }
      function duelGuess() {
        return member() && existing().status == 'TWO_PLAYERS_GUESS' && existing().maxPlayers == 2 &&
          !(request.auth.uid in existing().twoPlayersGuessMatched) &&
          changed().hasOnly(['twoPlayersGuessMatched', 'players', 'status']) &&
          incoming().twoPlayersGuessMatched.diff(existing().twoPlayersGuessMatched).affectedKeys().hasOnly([request.auth.uid]) &&
          incoming().twoPlayersGuessMatched[request.auth.uid] is string &&
          ((incoming().twoPlayersGuessMatched.size() == 1 && !changed().hasAny(['players', 'status'])) ||
           (incoming().twoPlayersGuessMatched.size() == 2 && incoming().status == 'SCOREBOARD' &&
            incoming().players[0].diff(existing().players[0]).affectedKeys().hasOnly(['score']) &&
            incoming().players[1].diff(existing().players[1]).affectedKeys().hasOnly(['score']) &&
            incoming().players[0].score == existing().players[0].score +
              (incoming().twoPlayersGuessMatched[existing().players[0].id] == existing().players[1].assignedWordId ? 50 : 0) &&
            incoming().players[1].score == existing().players[1].score +
              (incoming().twoPlayersGuessMatched[existing().players[1].id] == existing().players[0].assignedWordId ? 50 : 0)));
      }
      function inquiryMove() {
        return member() && existing().status in ['PLAYING_DISCUSSION', 'TWO_PLAYERS_GUESS'] &&
          changed().hasOnly(['inquiry']) &&
          ((existing().inquiry.turnPlayerId == request.auth.uid &&
            existing().inquiry.activeQuestion == null &&
            incoming().inquiry.diff(existing().inquiry).affectedKeys().hasOnly(['activeQuestion', 'activeAnswer', 'targetPlayerId']) &&
            incoming().inquiry.activeQuestion is map && incoming().inquiry.targetPlayerId in existing().memberIds) ||
           (existing().inquiry.targetPlayerId == request.auth.uid &&
            existing().inquiry.activeQuestion != null &&
            incoming().inquiry.turnPlayerId == existing().inquiry.targetPlayerId &&
            incoming().inquiry.targetPlayerId == existing().inquiry.turnPlayerId &&
            incoming().inquiry.activeQuestion == null));
      }
      function cycleMove() {
        return member() && existing().status == 'PLAYING_DISCUSSION' &&
          changed().hasOnly(['questioningCycle', 'currentCycleIdx']) &&
          existing().currentCycleIdx < existing().questioningCycle.size() &&
          existing().questioningCycle[existing().currentCycleIdx].askerId == request.auth.uid &&
          incoming().currentCycleIdx == existing().currentCycleIdx + 1 &&
          incoming().questioningCycle.size() == existing().questioningCycle.size();
      }
      // Lobby metadata is discoverable; live room contents are member-only.
      allow get: if isSignedIn() && (member() || (existing().status == 'LOBBY' && existing().isPublic == true));
      allow list: if isAdmin() || (isSignedIn() && request.query.limit <= 25 &&
        resource.data.status == 'LOBBY' && resource.data.isPublic == true);
      allow create: if isSignedIn() && roomId.matches('^[A-Z0-9]{6}$') &&
        incoming().status == 'LOBBY' && incoming().isPublic == true &&
        incoming().players.size() == 1 && incoming().memberIds == [request.auth.uid] &&
        incoming().hostId == request.auth.uid && incoming().maxPlayers >= 2 && incoming().maxPlayers <= 10 &&
        incoming().createdAt >= request.time.toMillis() - 300000 &&
        incoming().expiresAt > request.time.toMillis() &&
        incoming().expiresAt <= request.time.toMillis() + 7500000 &&
        incoming().secretWord == null && incoming().imposterAssignedWord == null &&
        incoming().votes.size() == 0 && validRoster();
      allow update: if isSignedIn() && live() && validRoster() &&
        incoming().hostId == existing().hostId && incoming().maxPlayers == existing().maxPlayers &&
        incoming().createdAt == existing().createdAt && incoming().expiresAt == existing().expiresAt &&
        incoming().isPublic == existing().isPublic &&
        (joining() || leaving() ||
         (member() && incoming().memberIds == existing().memberIds &&
          incoming().status in ['LOBBY', 'PLAYING', 'PLAYING_DISCUSSION', 'VOTING', 'REVEALED', 'GUESSING', 'SCOREBOARD', 'TWO_PLAYERS_GUESS'] &&
          ((request.auth.uid == existing().hostId &&
             (incoming().status != 'LOBBY' || (incoming().secretWord == null && incoming().imposterAssignedWord == null))) ||
           voting() || duelGuess() || inquiryMove() || cycleMove() ||
           (existing().status == 'GUESSING' && incoming().status == 'SCOREBOARD' &&
            existing().players[existing().memberIds.indexOf(request.auth.uid)].role == 'IMPOSTER' &&
            changed().hasOnly(['players', 'imposterGuessedWordId', 'status'])))));
      allow delete: if member();
    }

'''+s[end:]
# Rules lists have no indexOf; membership in the imposter's id list is checked
# with fixed positions (at most ten players).
s=s.replace("existing().players[existing().memberIds.indexOf(request.auth.uid)].role == 'IMPOSTER'", "isImposter()")
at=s.index('      function cycleMove()')
s=s[:at]+'''      function imposterAt(i) {
        return existing().players.size() > i && existing().players[i].id == request.auth.uid && existing().players[i].role == 'IMPOSTER';
      }
      function isImposter() {
        return imposterAt(0) || imposterAt(1) || imposterAt(2) || imposterAt(3) || imposterAt(4) ||
          imposterAt(5) || imposterAt(6) || imposterAt(7) || imposterAt(8) || imposterAt(9);
      }
'''+s[at:]
s=s.replace("allow create: if isSignedIn() && userId == request.auth.uid && isValidUser(incoming());", """allow create: if isOwner(userId) && isValidUser(incoming()) && incoming().get('role', 'user') == 'user'
        && incoming().get('email', '') == request.auth.token.get('email', '')
        && incoming().get('detectiveScore', 0) == 0;""")
s=s.replace("(isOwner(userId) && incoming().get('role', 'user') == existing().get('role', 'user') && incoming().get('email', '') == existing().get('email', ''))", """(isOwner(userId) && incoming().diff(existing()).affectedKeys().hasOnly([
          'displayName', 'academicLevel', 'academicYear', 'university', 'lastLogin', 'detectiveScore'
        ]))""")
s=s.replace('''    function isSubscribed() {
      return isSignedIn() && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.subscriptionActive == true;
    }''','''    // Free game: access is never gated by a subscription document read.
    function isSubscribed() { return isSignedIn(); }''')
at=s.index('    match /settings/{settingId}')
s=s[:at]+'''    match /users/{userId}/scoreReceipts/{deviceId} {
      allow read: if isOwner(userId);
      allow create, update: if isOwner(userId) && incoming().keys().hasOnly(['earned']) &&
        incoming().earned is number && incoming().earned >= 0 &&
        (resource == null || incoming().earned >= existing().earned);
    }

'''+s[at:]
with p.open('r+', encoding='utf-8') as f:
    f.write(s)
    f.truncate()
