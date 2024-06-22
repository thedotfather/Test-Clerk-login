import React from 'react';
import { useClerkLogout } from '@/hooks/useClerkLogout';

// export default function ClerkLogoutWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <div onClick={useClerkLogout}>
//       {children}
//     </div>
//   );
// }


interface ClerkLogoutWrapperProps {
    children: React.ReactNode;
}

const ClerkLogoutWrapper: React.FC<ClerkLogoutWrapperProps> = (
    {
        children
    }) => {
  return (
    <div onClick={useClerkLogout}>
      {children}
    </div>
  );
}

export default ClerkLogoutWrapper;
