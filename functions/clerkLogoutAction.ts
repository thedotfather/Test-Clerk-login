import { useClerk } from '@clerk/clerk-react';

export function clerkLogout(){
    
    return async function() {
        const { signOut } = useClerk();
        await signOut();
    }();
}

export function testFunction(){
    console.log('testFunction run');
}
