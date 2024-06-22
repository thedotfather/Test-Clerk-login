import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, SignOutButton} from '@clerk/nextjs';

import { getPlasmicAppUserFromToken } from '@plasmicapp/auth-api';
import { useAuth } from '@clerk/nextjs';
import { ExecuteEnsurePlasmicAppUser } from '@/plasmic-auth';
import { useEffect, useState } from 'react';
import { useEnsurePlasmicUser } from '@/hooks/useEnsurePlasmicUser';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function MyApp({ Component, pageProps }: AppProps) {

  
  
  return (
    <ClerkProvider publishableKey={publishableKey} {...pageProps}>
      <PlasmicRootWrapperWithAuth>
        <SignOutButton/>
        <PlasmicRootProvider Head={Head}>
        
            <Component {...pageProps}/>

        </PlasmicRootProvider>
      </PlasmicRootWrapperWithAuth>
    </ClerkProvider>
  );
}

function PlasmicRootWrapperWithAuth({ children }: { children: React.ReactNode }) {
  // const { isLoaded, userId } = useAuth();
  // const [plasmicUser, setPlasmicUser] = useState(null);

  // useEffect(() => {
  //   async function fetchPlasmicUser() {
  //     if (isLoaded && userId) {
  //       try {
  //         const response = await fetch('/api/authApi');
  //         if (!response.ok) {
  //           throw new Error('Failed to get Plasmic user');
  //         }
  //         //const data = await response.json();
  //         //setPlasmicUser(data);
  //       } catch (error) {
  //         console.error('Error fetching Plasmic user:', error);
  //       }
  //     }
  //   }

  //   fetchPlasmicUser();
  // }, [isLoaded, userId]);

  useEnsurePlasmicUser();

  return (
    <div>
      {children}
    </div>
  );
}

// async function PlasmicRootWrapperWithAuth(props: { children: React.ReactNode }) {
//   //const { isUserLoading, plasmicUser, plasmicUserToken } = usePlasmicAuthData();
//   //const targResult = ExecuteEnsurePlasmicAppUser();

//   const response = await fetch('/api/authApi');
//   if (!response.ok) {
//     throw new Error('Failed to get Plasmic user');
//   }

//   return (
//     <div>
//       {props.children}
//     </div>
//   );
// }
