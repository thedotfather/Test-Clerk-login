// hooks/useEnsurePlasmicUser.ts
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

export const useEnsurePlasmicUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [plasmicUser, setPlasmicUser] = useState(null);
  const [plasmicUserToken, setPlasmicUserToken] = useState(null);

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
            throw new Error('hooks/useEnsurePlasmicUser.ts:  Failed to ensure Plasmic user');
          }

          const data = await response.json();
          setPlasmicUser(data.result.user);
          setPlasmicUserToken(data.result.token);

        } catch (error) {
          console.error(error);
        }
      }
    };

    ensureUser();
  }, [isLoaded, isSignedIn, user]);

  return { plasmicUser, plasmicUserToken };
};
