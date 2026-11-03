// Local play never needs a cloud connection. Storage failures must not stop a match.
const memory = new Map<string, unknown>();
export function readLocal<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) return JSON.parse(value) as T;
  } catch { /* private browsing / full storage */ }
  return (memory.get(key) as T | undefined) ?? fallback;
}
export function writeLocal(key: string, value: unknown) {
  memory.set(key, value);
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* memory fallback */ }
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('clinoma-local-data', { detail: { key } }));
}
export function deviceId(): string {
  let id = readLocal('clinoma-device-id', '');
  if (!id) { id = crypto.randomUUID(); writeLocal('clinoma-device-id', id); }
  return id;
}
