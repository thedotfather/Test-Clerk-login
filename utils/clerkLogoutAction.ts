import { useClerk } from '@clerk/clerk-react';

export function ClerkLogout(){
    const { signOut } = useClerk();

    return async function() {
        await signOut();
    };
}
