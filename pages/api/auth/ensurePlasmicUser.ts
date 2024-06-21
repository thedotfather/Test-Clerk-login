// pages/api/auth/ensurePlasmicUser.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userId, targEmail } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  try {
    const result = await ensurePlasmicAppUser({
      email: targEmail,
      appSecret: process.env.PLASMIC_APP_SECRET || ''
    });

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to ensure Plasmic app user' });
  }
};

export default handler;
