//"use client";
import { ensurePlasmicAppUser, getPlasmicAppUserFromToken } from '@plasmicapp/auth-api';
import { useAuth, useUser } from '@clerk/nextjs'; // Assuming you're using Clerk for auth


const plasmicAppSecret = process.env.PLASMIC_APP_SECRET;

export async function ExecuteEnsurePlasmicAppUser() {

    console.log("ExecuteEnsurePlasmicAppUser:  plasmicAppSecret: " + plasmicAppSecret);
    console.log('before ensurePlasmicAppUser');

    await ensurePlasmicAppUser({
        email: 'stijn@thedotfather.be',
        appSecret: plasmicAppSecret === undefined ? "" : plasmicAppSecret
    });

    console.log('after ensurePlasmicAppUser');

    return null;


    // const { isLoaded, isSignedIn, user } = useUser();

    // if (!isLoaded || !isSignedIn) {
    //     return null;
    // }

    // let targEmail = user.emailAddresses[0].emailAddress;
    // console.log("ExecuteEnsurePlasmicAppUser:  targEmail: " + targEmail);
    // console.log("ExecuteEnsurePlasmicAppUser:  plasmicAppSecret: " + plasmicAppSecret);

    //  await ensurePlasmicAppUser({
    //     email: user.emailAddresses[0].emailAddress,
    //     appSecret: plasmicAppSecret === undefined ? "" : plasmicAppSecret
    // });

    // return null;
}

// export async function getPlasmicAppUserToken() {
//   const plasmicUser = await getPlasmicAppUser();
//   return plasmicUser ? getPlasmicAppUserFromToken(plasmicUser) : null;
// }
