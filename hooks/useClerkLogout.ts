import { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';

export const useClerkLogout = () => {

    const { signOut } = useClerk();

    const doClerkLogout = async () => {
        await signOut();
    };

    doClerkLogout();

    // useEffect(() => {
    //     const doClerkLogout = async () => {
    //         await signOut();
    //     };

    //     doClerkLogout();
    // }, [signOut]);
};
