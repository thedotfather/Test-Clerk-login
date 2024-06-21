import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <ClerkProvider publishableKey={publishableKey}>
        <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
          <h1>My App</h1>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton/>
          </SignedOut>
        </header>

        
          <Component {...pageProps} />
        
      </ClerkProvider>
    </PlasmicRootProvider>
  );
}
