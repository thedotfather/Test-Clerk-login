import { ExecuteEnsurePlasmicAppUser } from '@/plasmic-auth';
import type { NextApiRequest, NextApiResponse } from "next";

// This API endpoint is used to provide the Plasmic user in client-side code.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {

  res.json(await ExecuteEnsurePlasmicAppUser());
}
