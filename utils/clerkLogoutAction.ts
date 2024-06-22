import { useClerk } from '@clerk/clerk-react';

export async function ClerkLogout(){
    const { signOut } = useClerk();
    await signOut();
}
