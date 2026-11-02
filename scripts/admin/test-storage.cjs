const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "dr-imposter.firebasestorage.app"
});

async function testStorage() {
  try {
    const bucket = getStorage(app).bucket();
    console.log("Checking bucket:", bucket.name);
    const [files] = await bucket.getFiles({ maxResults: 5 });
    console.log(`✅ Cloud Storage bucket is accessible! Existing files count: ${files.length}`);
    files.forEach(f => console.log("   -", f.name));
  } catch (err) {
    console.warn("⚠️ Storage check notice:", err.message);
  }
}

testStorage();
