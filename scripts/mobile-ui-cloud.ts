// Test-build-only network/auth facade. Never imported by the production build.
export { db } from '../src/firebase';
export const acquireCloudAccess = async () => () => {};
export const withCloudAccess = async <T>(action: () => Promise<T>) => action();
export const ensureOnlineIdentity = async () => 'local-test-player';
