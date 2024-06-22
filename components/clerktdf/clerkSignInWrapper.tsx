import { SignIn } from "@clerk/nextjs";
import React from 'react';

interface ClerkSignInWrapperProps {
  }
  
export const ClerkSignInWrapper: React.FC<ClerkSignInWrapperProps> = ({  }) => {
return (
    <SignIn />
);
};
