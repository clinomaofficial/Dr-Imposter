export type GameMode = 'GUESS' | 'BATTLE_1V1' | 'DR_IMPOSTER' | undefined;

export function rosterForMode(names: string[], avatars: number[], mode: GameMode, arabic: boolean) {
  const min = mode === 'DR_IMPOSTER' ? 3 : 2;
  const max = mode === 'BATTLE_1V1' ? 2 : 10;
  const count = Math.min(max, Math.max(min, names.length));
  return {
    names: Array.from({ length: count }, (_, i) => (typeof names[i] === 'string' && names[i].trim()) || `${arabic ? 'طبيب' : 'Doctor'} ${i + 1}`),
    avatars: Array.from({ length: count }, (_, i) => Number.isInteger(avatars[i]) && avatars[i] >= 0 && avatars[i] < 10 ? avatars[i] : i % 10),
  };
}

export function roomMatchesMode(maxPlayers: number, mode: GameMode) {
  return mode === 'BATTLE_1V1' ? maxPlayers === 2 : mode === 'DR_IMPOSTER' ? maxPlayers >= 3 && maxPlayers <= 10 : true;
}

export const minimumRoomPlayers = (maxPlayers: number) => maxPlayers === 2 ? 2 : 3;

export function roomInvitation(code: string, arabic: boolean, href: string) {
  let link = '';
  try {
    const url = new URL(href);
    if (url.protocol === 'https:' && !['localhost','127.0.0.1','[::1]'].includes(url.hostname)) {
      url.search = ''; url.hash = ''; url.searchParams.set('room', code); link = `\n${url.href}`;
    }
  } catch { /* A room code works in native/offline shells without a public URL. */ }
  return `${arabic ? 'انضم إلى غرفتي في Clinoma Games. الكود:' : 'Join my Clinoma Games room. Code:'} ${code}${link}`;
}
