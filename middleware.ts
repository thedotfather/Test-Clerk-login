import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';
import { ExecuteEnsurePlasmicAppUser } from './plasmic-auth';


const isPublicRoute = createRouteMatcher(['/login(.*)', '/sign-up(.*)', '/plasmic-host(.*)']);
// const isPublicRoute = createRouteMatcher(['/login(.*)', '/sign-up(.*)']);

export default clerkMiddleware((auth, request) => {
  if(!isPublicRoute(request)) {
    console.log("middleware.ts:  before auth().protect check");
    auth().protect();
  }

  // If logged in, then EnsurePlasmicUser and save access-token
  console.log("middleware.ts:  before auth().userId check");
  console.log("middleware: auth().userId: " + auth().userId);
  if(auth().userId){
    
    console.log("Running ExecuteEnsurePlasmicAppUser...");
    const targResult = ExecuteEnsurePlasmicAppUser();

  }
  console.log("middleware: end...");
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
