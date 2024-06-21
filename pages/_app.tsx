import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';

import { getPlasmicAppUserFromToken } from '@plasmicapp/auth-api';
import { useAuth } from '@clerk/nextjs';
import { ExecuteEnsurePlasmicAppUser } from '@/plasmic-auth';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function MyApp({ Component, pageProps }: AppProps) {

  
  
  return (
    <ClerkProvider publishableKey={publishableKey}>
      
      <PlasmicRootWrapperWithAuth>
        <PlasmicRootProvider Head={Head}>
        
            <Component {...pageProps}/>

        </PlasmicRootProvider>
      </PlasmicRootWrapperWithAuth>

    </ClerkProvider>
  );
}

async function PlasmicRootWrapperWithAuth(props: { children: React.ReactNode }) {
  //const { isUserLoading, plasmicUser, plasmicUserToken } = usePlasmicAuthData();
  //const targResult = ExecuteEnsurePlasmicAppUser();

  const response = await fetch('/api/authApi');
  if (!response.ok) {
    throw new Error('Failed to get Plasmic user');
  }

  return (
    <div>
      {props.children}
    </div>
  );
}
