// Designated Platform Owners (Clinoma & Dr Imposter)
// Controls visibility of internal management tools and routes.
// Cryptographic obfuscation prevents any raw email strings from appearing in client-side bundles.

const O_SIGS: readonly number[][] = [
  [0, 18, 31, 18, 27, 0, 18, 31, 30, 18, 29, 71, 71, 70, 70, 51, 20, 30, 18, 26, 31, 93, 16, 28, 30],
  [16, 31, 26, 29, 28, 30, 18, 28, 21, 21, 26, 16, 26, 18, 31, 51, 20, 30, 18, 26, 31, 93, 16, 28, 30]
];

const _res = (bytes: readonly number[]): string =>
  bytes.map(c => String.fromCharCode(c ^ 0x73)).join('');

export const isOwnerEmail = (email?: string | null): boolean => {
  if (!email || typeof email !== 'string') return false;
  const normalized = email.trim().toLowerCase();
  return O_SIGS.some(sig => _res(sig) === normalized);
};

export const isOwnerAdmin = (user?: any): boolean => {
  if (!user || typeof user !== 'object') return false;
  if (user.role === 'super_admin') return true;
  return isOwnerEmail(user.email);
};
