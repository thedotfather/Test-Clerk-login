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
        
            <Component {...pageProps}/>

      </PlasmicRootWrapperWithAuth>
    </ClerkProvider>
  );
}

function PlasmicRootWrapperWithAuth({ children }: { children: React.ReactNode }) {

  const { plasmicUser, plasmicUserToken } = useEnsurePlasmicUser();

  return (
    <PlasmicRootProvider
      Head={Head}
      user={plasmicUser}
      userAuthToken={plasmicUserToken}
    >
      {children}
    </PlasmicRootProvider>
  );
}
