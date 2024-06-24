import { useSignIn } from "@clerk/nextjs";

export async function ClerkSignIn(email: string, password: string) {
    const { isLoaded, signIn, setActive } = useSignIn();

    try {
        const signInAttempt = await signIn?.create({
            identifier: email,
            strategy: 'password',
            password: password,
        });

        // If sign-in process is complete, set the created session as active
        // and redirect the user
        if (signInAttempt!= undefined && setActive != undefined  && signInAttempt.status === 'complete') {
            await setActive({ session: signInAttempt.createdSessionId });
            return { success: true };
        } else {
            // If the status is not complete, check why. User may need to
            // complete further steps.
            console.error(JSON.stringify(signInAttempt, null, 2));
            return { success: false };
        }
    } catch (err: any) {
        console.error(JSON.stringify(err, null, 2));
        return { success: false };
    }
  
}
