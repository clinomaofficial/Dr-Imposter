from pathlib import Path
p=Path('src/components/admin/AdminPlatformHub.tsx')
s=p.read_text(encoding='utf-8')
start=s.index('  const handleUpdateUserAttempts =')
end=s.index('  const handleToggleBlock =',start)
s=s[:start]+s[end:]
s=s.replace("      if (roleFilter === 'subscribed') return u.subscriptionActive === true;\n",'')
s=s.replace("                    { id: 'subscribed', label: 'المشتركين' },\n",'')
start=s.index('                            {u.subscriptionActive && (')
end=s.index("                            {u.status === 'blocked'",start)
s=s[:start]+s[end:]
s='\n'.join(line for line in s.split('\n') if '<span>المحاولات:' not in line)
start=s.index('                        <button\n                          onClick={() => handleUpdateUserAttempts')
end=s.index('                        <button\n                          onClick={() => handlePromoteRole',start)
s=s[:start]+s[end:]
start=s.index('                <button\n                  onClick={() => setGameConfig({ ...gameConfig, enforceAttemptLimits:')
end=s.index('                </button>',start)+len('                </button>')
s=s[:start]+'''                <span className="text-mint text-sm font-bold">مجاني دائمًا</span>'''+s[end:]
s=s.replace('        ...gameConfig,\n        updatedAt:', '        ...gameConfig,\n        enforceAttemptLimits: false,\n        updatedAt:')
s=s.replace('قفل المحاولات معطل افتراضياً.', 'بدون اشتراكات أو حدود للمحاولات.')
s=s.replace('التحكم السحابي الحي بإعدادات اللعبة (Remote Config)', 'إعدادات اللعبة الاختيارية')
s=s.replace('تعديل هذه القيم هنا يُحدث قواعد اللعبة لحظياً على كافة هواتف اللاعبين دون الحاجة لإعادة رفع التطبيق.', 'تصل هذه القيم عندما يختار اللاعب تحديث البيانات. اللعب المحلي يستخدم آخر نسخة محفوظة.')
s=s.replace('سيظهر فوراً لجميع اللاعبين!', 'سيظهر بعد تحديث اللاعبين للبيانات.')
s=s.replace('تم حفظ وتطبيق الإعدادات السحابية الحية بنجاح.', 'تم حفظ الإعدادات؛ تصل للاعبين عند تحديث البيانات.')
s=s.replace("query(collection(db, 'ads'));", "query(collection(db, 'ads'), limit(25));")
# Only the visible tab needs a real-time subscription.
for label,tab in [('  // 2. Real-time Rooms Listener','rooms'),('  // 3. Real-time Announcements Listener','announcements'),('  // 4. Real-time Ads Listener','ads'),('  // 5. Real-time Game Config Listener','game_config')]:
    at=s.index('  useEffect(() => {',s.index(label))
    s=s[:at]+s[at:].replace('  useEffect(() => {',f"  useEffect(() => {{\n    if (activeTab !== '{tab}' && activeTab !== 'overview') return;",1)
    end=s.index('  }, []);',at)
    s=s[:end]+s[end:].replace('  }, []);','  }, [activeTab]);',1)
p.write_text(s,encoding='utf-8')

p=Path('src/components/views/MedicalCupView.tsx')
s=p.read_text(encoding='utf-8')
s=s.replace("      const q = query(collection(db,'users'), orderBy('detectiveScore','desc'), limit(25));\n      const snap = await withCloudAccess(() => getDocs(q));", """      const cached = readLocal<{ at: number; rows: any[] } | null>('clinoma-leaderboard', null);
      let rows = cached?.rows;
      if (!cached || Date.now() - cached.at >= 24 * 60 * 60 * 1000) {
        await ensureOnlineIdentity();
        const q = query(collection(db,'users'), orderBy('detectiveScore','desc'), limit(25));
        const snap = await withCloudAccess(() => getDocs(q));
        rows = snap.docs.map(d => ({ ...d.data(), id: d.id }));
        writeLocal('clinoma-leaderboard', { at: Date.now(), rows });
      }
      const snap = { forEach: (fn: (d: any) => void) => rows!.forEach(row => fn({ id: row.id, data: () => row })) };""")
# An expired room closes locally without keeping a cloud listener alive.
at=s.index('  // Optional settings come from disk')
s=s[:at]+"""  useEffect(() => {
    if (!onlineRoomState?.expiresAt) return;
    const timer = setTimeout(() => {
      closeRoomConnection();
      setRoomId('');
      setOnlineRoomState(null);
      setPhase('MULTI_SETUP_ONLINE');
      setNotice(t('انتهت مدة الغرفة. أنشئ غرفة جديدة.', 'Room expired. Create a new room.'));
    }, Math.max(0, onlineRoomState.expiresAt - Date.now()));
    return () => clearTimeout(timer);
  }, [onlineRoomState?.expiresAt]);

"""+s[at:]
s=s.replace('console.warn("⚠️ Room real-time subscription error:", error);', '''closeRoomConnection();
      setNotice(t('انقطع اتصال الغرفة. اخرج وأعد الانضمام عند توفر الاتصال.', 'Room connection failed. Leave and rejoin when connected.'));
      console.warn("Room subscription error:", error);''')
p.write_text(s,encoding='utf-8')
