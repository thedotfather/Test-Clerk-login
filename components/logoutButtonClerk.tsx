import React from 'react';
import { SignOutButton } from '@clerk/nextjs';

interface ClerkSignOutButtonProps {
  redirectUrl?: string;
  sessionId?: string;
  children?: React.ReactNode;
}

const ClerkSignOutButton: React.FC<ClerkSignOutButtonProps> = ({ redirectUrl, sessionId, children }) => {
  return (
    <SignOutButton signOutOptions={{ sessionId }} redirectUrl={redirectUrl}>
      {children || 'Sign Out'}
    </SignOutButton>
  );
};

export default ClerkSignOutButton;

