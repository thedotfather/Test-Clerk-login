import React from 'react';
import { useEffect } from 'react';
import { useClerkLogout } from '@/hooks/useClerkLogout';
import { useClerk } from '@clerk/clerk-react';

export function ClerkLogout(){
    
    const { signOut } = useClerk();
  
    useEffect(() => {
        const doClerkLogout = async () => {
            await signOut();
        };

        doClerkLogout();
    }, [signOut]);

    return null;
}

export function testFunction(){
    console.log('testFunction run');
}
