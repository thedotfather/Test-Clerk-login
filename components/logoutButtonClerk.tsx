import React from 'react';
import { SignOutButton } from '@clerk/nextjs';

interface ClerkSignOutButtonProps {
  redirectUrl?: string;
  sessionId?: string;
}

export const ClerkSignOutButton: React.FC<ClerkSignOutButtonProps> = ({ redirectUrl, sessionId }) => {
  return (
    <SignOutButton signOutOptions={{ sessionId }} redirectUrl={redirectUrl}>
    </SignOutButton>
  );
};
