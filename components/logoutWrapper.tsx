import React from 'react';
import { SignOutButton } from "@clerk/nextjs";
import { useClerkLogout } from '@/hooks/useClerkLogout';

// export default function ClerkLogoutWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <div onClick={useClerkLogout}>
//       {children}
//     </div>
//   );
// }


interface LogoutWrapperProps {
    children: React.ReactNode;
}

const LogoutWrapper: React.FC<LogoutWrapperProps> = (
    {
        children
    }) => {
  return (
    <div>
        <SignOutButton>
            {children}
        </SignOutButton>
    </div>
  );
}

export default LogoutWrapper;

{/* <div onClick={useClerkLogout}>
      {children}
    </div> */}