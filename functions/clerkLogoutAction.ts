import { useClerk } from '@clerk/clerk-react';

export function useClerkLogout(){
    const { signOut } = useClerk();

    return async function() {
        await signOut();
    };
}
