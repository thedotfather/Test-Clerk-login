import React from 'react';
import { useClerkLogout } from '@/hooks/useClerkLogout';

export default function ClerkLogoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div onClick={useClerkLogout}>
      {children}
    </div>
  );
}
