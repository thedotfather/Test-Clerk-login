import * as React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const TdfUserButton = () => {
  return (
    <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
    </SignedIn>
  );
}

export default TdfUserButton;
