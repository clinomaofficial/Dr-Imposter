const fs = require('fs');
const path = require('path');
const https = require('https');
const { GoogleAuth } = require('google-auth-library');

async function deploy() {
  const serviceAccountPath = path.resolve(__dirname, '../../serviceAccountKey.json');
  const rulesPath = path.resolve(__dirname, '../../firestore.rules');
  const rulesContent = fs.readFileSync(rulesPath, 'utf8');

  console.log('Authenticating with Google Cloud...');
  const auth = new GoogleAuth({
    keyFile: serviceAccountPath,
    scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/firebase']
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  const projectId = 'dr-imposter';

  console.log(`Publishing sanitized rules to project ${projectId}...`);

  const createRelease = () => {
    return new Promise((resolve, reject) => {
      const payload = JSON.stringify({
        source: {
          files: [
            {
              name: 'firestore.rules',
              content: rulesContent
            }
          ]
        }
      });

      const options = {
        hostname: 'firebaserules.googleapis.com',
        path: `/v1/projects/${projectId}/rulesets`,
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token.token}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      };

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            const parsed = JSON.parse(body);
            resolve(parsed.name);
          } else {
            reject(new Error(`Failed to create ruleset: ${res.statusCode} ${body}`));
          }
        });
      });

      req.on('error', reject);
      req.write(payload);
      req.end();
    });
  };

  const updateRelease = (rulesetName) => {
    return new Promise((resolve, reject) => {
      const payload = JSON.stringify({
        release: {
          name: `projects/${projectId}/releases/cloud.firestore`,
          rulesetName: rulesetName
        }
      });

      const options = {
        hostname: 'firebaserules.googleapis.com',
        path: `/v1/projects/${projectId}/releases/cloud.firestore`,
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token.token}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      };

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(JSON.parse(body));
          } else {
            reject(new Error(`Failed to update release: ${res.statusCode} ${body}`));
          }
        });
      });

      req.on('error', reject);
      req.write(payload);
      req.end();
    });
  };

  const rulesetName = await createRelease();
  console.log(`Created ruleset: ${rulesetName}`);
  await updateRelease(rulesetName);
  console.log(`🎉 Successfully published sanitized rules live to Firebase cloud!`);
  process.exit(0);
}

deploy().catch(err => {
  console.error("Deploy error:", err);
  process.exit(1);
});
