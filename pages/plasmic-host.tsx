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

import TdfUserButton from '../components/clerktdf/tdf-userbutton';

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

import { ClerkLogoutWrapper } from '../components/clerktdf/tdf-clerkLogoutWrapper';

registerComponent(ClerkLogoutWrapper, 
  {
    name: 'clerkLogoutWrapper',
    props: {
      children: 'slot'
    },
    importPath: './components/clerktdf/Tdf-clerkLogoutWrapper'
  }
);


import { ClerkLogout } from '../functions/clerkLogoutAction';

registerFunction(ClerkLogout, {
  name: 'clerkLogout3',
  importPath: './functions/clerkLogoutAction',
  isDefaultExport: false
});
//test

import { testFunction } from '../functions/clerkLogoutAction';

registerFunction(testFunction, {
  name: 'testFunction',
  importPath: './functions/clerkLogoutAction'
});
