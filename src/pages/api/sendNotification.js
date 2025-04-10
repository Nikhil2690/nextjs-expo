import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

const serviceAccount = JSON.parse(
  fs.readFileSync(path.resolve('./firebase-service-account.json'), 'utf-8')
);

// Initialize Firebase only once
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token, title, body } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Missing FCM token' });
  }

  try {
    const message = {
      notification: {
        title: title || 'Test Notification',
        body: body || 'This is a sample push notification',
      },
      token,
    };

    const response = await admin.messaging().send(message);
    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error('Error sending FCM:', error);
    return res.status(500).json({ error: 'Failed to send notification' });
  }
}
