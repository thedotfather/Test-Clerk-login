import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';
import { ExecuteEnsurePlasmicAppUser } from './plasmic-auth';


const isPublicRoute = createRouteMatcher(['/login(.*)', '/sign-up(.*)', '/plasmic-host(.*)']);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    auth().protect();
  }

  // If logged in, then EnsurePlasmicUser and save access-token
  if(auth().userId){
    
    console.log("Running ExecuteEnsurePlasmicAppUser...");
    ExecuteEnsurePlasmicAppUser();

  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
