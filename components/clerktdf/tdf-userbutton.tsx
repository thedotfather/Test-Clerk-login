import * as React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const TdfUserButton = () => {
  return (
    <div>
        <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
        </SignedIn>
    </div>
  );
}

export default TdfUserButton;
