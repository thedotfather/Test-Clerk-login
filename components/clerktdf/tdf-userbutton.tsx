import * as React from 'react';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const TdfUserButton = () => {
  return (
    <div>
      <UserButton />
    </div>
  );
}

export default TdfUserButton;
