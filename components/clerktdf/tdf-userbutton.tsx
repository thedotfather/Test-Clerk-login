import * as React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

interface TdfUserButtonProps {
    showName: boolean;
}

const TdfUserButton: React.FC<TdfUserButtonProps> = (
    {
        showName
    }) => {
  return (
    <div>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton
            showName={showName}
          />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton/>
        </SignedOut>
    </div>
  );
}

export default TdfUserButton;
