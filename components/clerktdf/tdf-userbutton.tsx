import * as React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

interface TdfUserButtonProps {
    showName: boolean;
}

export const TdfUserButton: React.FC<TdfUserButtonProps> = (
    {
        showName
    }) => {
  return (
    <div>
          <UserButton
            showName={showName}
          />
    </div>
  );
}

