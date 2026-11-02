from pathlib import Path
p=Path('src/components/views/MedicalCupView.tsx')
s=p.read_text(encoding='utf-8')
s=s.replace("import { db } from '../../firebase';", """import { db, acquireCloudAccess, withCloudAccess, ensureOnlineIdentity } from '../../firebase';
import { subscribePublicData } from '../../lib/publicData';
import { scoreBank, saveLocalScore } from '../../lib/localScore';
import { readLocal, writeLocal } from '../../lib/localStore';
import { joinRoom, leaveRoom, voteInRoom, guessInDuel } from '../../lib/onlineRoom';""")
start=s.index('  // Synchronize dynamic global game settings')
end=s.index('  // Modal / Toggles', start)
s=s[:start]+"""  // Optional settings come from disk, never a live listener during local play.
  useEffect(() => subscribePublicData(({ gameConfig: cfg }) => {
    if (typeof cfg.turnTimeLimit === 'number' && cfg.turnTimeLimit >= 0) setQuestionTimeLimit(cfg.turnTimeLimit);
    if (typeof cfg.questionsPerPlayer === 'number' && cfg.questionsPerPlayer >= 0) setQuestionsPerPlayer(cfg.questionsPerPlayer);
  }), []);

"""+s[end:]
start=s.index('  // Sync singleScore with appUser')
end=s.index('  // Handle direct URL room invitation', start)
s=s[:start]+"""  // Signed-in and guest scores both persist locally; sync is explicit.
  useEffect(() => {
    setSingleScore(scoreBank(appUser?.id, appUser?.detectiveScore || 0).total);
  }, [appUser?.id, appUser?.detectiveScore]);
  const persistScore = (newScore: number) => {
    saveLocalScore(newScore, appUser?.id, appUser?.detectiveScore || 0);
  };

"""+s[end:]
s=s.replace("orderBy('detectiveScore','desc'), limit(100)","orderBy('detectiveScore','desc'), limit(25)")
s=s.replace('const snap = await getDocs(q);','const snap = await withCloudAccess(() => getDocs(q));')
s=s.replace("const pid = Math.random().toString(36).substr(2, 9);", "await openRoomConnection();\n      const pid = await ensureOnlineIdentity();",1)
s=s.replace('hostId: pid,','hostId: pid,\n        memberIds: [pid],\n        expiresAt: Date.now() + 2 * 60 * 60 * 1000,',1)
s=s.replace('name: currentPlayerName.trim(), score: 0','name: currentPlayerName.trim().slice(0, 40), score: 0',1)
start=s.index("      const roomRef = doc(db,'rooms', code);", s.index('  const joinOnlineRoom'))
end=s.index('      listenToRoom(code, pid);',start)
s=s[:start]+"""      await openRoomConnection();
      const pid = await joinRoom(code, currentPlayerName, capacity => !!initialRoomCode || roomMatchesMode(capacity, gameModeLock));
      setLocalPlayerId(pid);
      setRoomId(code);

"""+s[end:]
start=s.index('    const currentVotes =',s.index('  const handleOnlineVote'))
end=s.index('    } catch {',start)
s=s[:start]+"""      await voteInRoom(roomId, localPlayerId, votedId);
"""+s[end:]
start=s.index('    if (!onlineRoomState) return;',s.index('  const submitOnlineTwoPlayersGuess'))
end=s.index('  // Online Clinical Inquiry Handlers',start)
s=s[:start]+"""    try { await guessInDuel(roomId, localPlayerId, targetWordId); }
    catch { setNotice(t('تعذر حفظ التخمين. حاول مجددًا.', 'Could not save your guess. Please try again.')); }
  };

"""+s[end:]
s=s.replace('if (!snapshot.exists()) return;',"""if (!snapshot.exists()) {
        closeRoomConnection();
        setOnlineRoomState(null);
        setRoomId('');
        setPhase('MULTI_SETUP_ONLINE');
        setNotice(t('أُغلقت الغرفة. يمكنك إنشاء غرفة جديدة.', 'The room closed. You can create another room.'));
        return;
      }""",1)
start=s.index('                  if (roomUnsubscribeRef.current)',s.index("{phase ==='ONLINE_LOBBY'"))
end=s.index('                  setOnlineRoomState(null);',start)
s=s[:start]+"""                  void leaveCurrentRoom();
"""+s[end:]
s=s.replace("""                    if (roomUnsubscribeRef.current) {
                      roomUnsubscribeRef.current();
                      roomUnsubscribeRef.current = null;
                    }
                    if (gameModeLock)""", """                    void leaveCurrentRoom();
                    if (gameModeLock)""")
s=s.replace('''    return () => {
      if (roomUnsubscribeRef.current)''','''    return () => {
      roomConnectionRef.current?.();
      roomConnectionRef.current = null;
      if (roomUnsubscribeRef.current)''',1)
at=s.index('  // Clean up Firestore real-time listener')
s=s[:at]+"""  const roomConnectionRef = useRef<(() => void) | null>(null);
  const openRoomConnection = async () => {
    if (!navigator.onLine) throw new Error('offline');
    if (!roomConnectionRef.current) roomConnectionRef.current = await acquireCloudAccess();
  };
  const closeRoomConnection = () => {
    roomUnsubscribeRef.current?.();
    roomUnsubscribeRef.current = null;
    roomConnectionRef.current?.();
    roomConnectionRef.current = null;
  };
  const leaveCurrentRoom = async () => {
    roomUnsubscribeRef.current?.();
    roomUnsubscribeRef.current = null;
    try { if (roomId && localPlayerId) await leaveRoom(roomId, localPlayerId); }
    catch (error) { console.warn('Room departure failed; room has a two-hour expiry.', error); }
    finally { closeRoomConnection(); }
  };

"""+s[at:]
s=s.replace('console.error("Firestore create room error:", error);','closeRoomConnection();\n      console.error("Firestore create room error:", error);')
s=s.replace('console.error("Firestore join room error:", error);','closeRoomConnection();\n      console.error("Firestore join room error:", error);')
s=s.replace("      const q = query(\n        collection(db, 'rooms'),", "      await ensureOnlineIdentity();\n      const q = query(\n        collection(db, 'rooms'),")
p.write_text(s,encoding='utf-8')
