import { ensurePlasmicAppUser, getPlasmicAppUserFromToken } from '@plasmicapp/auth-api';
import { useAuth, useUser } from '@clerk/nextjs'; // Assuming you're using Clerk for auth
"use client";

const plasmicAppSecret = process.env.PLASMIC_APP_SECRET;

export async function ExecuteEnsurePlasmicAppUser() {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return await ensurePlasmicAppUser({
        email: user.emailAddresses[0].emailAddress,
        appSecret: plasmicAppSecret === undefined ? "" : plasmicAppSecret
    });
}

// export async function getPlasmicAppUserToken() {
//   const plasmicUser = await getPlasmicAppUser();
//   return plasmicUser ? getPlasmicAppUserFromToken(plasmicUser) : null;
// }
