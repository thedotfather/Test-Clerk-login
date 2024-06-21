// hooks/useEnsurePlasmicUser.ts
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export const useEnsurePlasmicUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    const ensureUser = async () => {
      if (isLoaded && isSignedIn && user) {
        try {
          const response = await fetch('/api/auth/ensurePlasmicUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              userId: user.id, 
              email: user.primaryEmailAddress?.emailAddress, 
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to ensure Plasmic user');
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    ensureUser();
  }, [isLoaded, isSignedIn, user]);
};
