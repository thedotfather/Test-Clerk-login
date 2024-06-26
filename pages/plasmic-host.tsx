import * as React from 'react';
import { PlasmicCanvasHost, registerComponent, registerFunction } from '@plasmicapp/react-web/lib/host';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}

import { TdfUserButton } from '../components/clerktdf/tdf-userbutton';

registerComponent(TdfUserButton, 
  {
    name: 'clerkUserButton',
    props: {
      showName: { 
        displayName: 'Show Name',
        type: 'boolean', 
        defaultValue: true}
    },
    importPath: './components/clerktdf/tdf-userbutton'
  }
);

import { ClerkSignOutButton } from '../components/logoutButtonClerk';

registerComponent(ClerkSignOutButton, {
  name: 'ClerkSignOutButton',
  props: {
    redirectUrl: {
      type: 'string',
      displayName: 'Redirect URL',
      description: 'The URL to redirect to after sign out'
    },
    sessionId: {
      type: 'string',
      displayName: 'Session ID',
      description: 'The ID of a specific session to sign out of'
    },
    children: {
      type: 'slot',
      displayName: 'Children',
      description: 'The content to display in the button'
    }
  },
  importPath: './components/logoutButtonClerk'
});

import { ClerkSignInWrapper } from '@/components/clerktdf/clerkSignInWrapper';

registerComponent(ClerkSignInWrapper, {
  name: 'ClerkSignInWrapper',
  props: {
  },
  importPath: './components/clerktdf/clerkSignInWrapper'
});

import { testFunction } from '../functions/clerkLogoutAction';

registerFunction(testFunction, {
  name: 'testFunction',
  importPath: './functions/clerkLogoutAction'
});


import { ClerkSignIn } from '../functions/clerkSignInAction';

registerFunction(ClerkSignIn, {
  name: 'ClerkSignIn',
  params: [
    {
      name: 'email',
      type: 'string',
      description: 'The email address to sign in with'
    },
    {
      name: 'password',
      type: 'string',
      description: 'The password to sign in with'
    }
  ],
  returnValue: {
    type: 'object',
    description: 'Whether the sign-in was successful'
  },
  importPath: './functions/clerkSignInAction'
});
