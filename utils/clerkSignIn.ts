// // utils/clerkSignIn.ts
// import { SignIn } from '@clerk/nextjs';

// export const signInWithEmailPassword = async (email: string, password: string) => {
//   try {
//     // Create a new SignIn instance
//     const signIn = await SignIn.create({
//       identifier: email,
//       strategy: 'password',
//       password: password,
//     });

//     // Check the sign-in status
//     if (signIn.status === 'complete') {
//       // Set the active session
//       await signIn.setActive();
//       return { success: true };
//     } else {
//       return { success: false, message: 'Sign-in not complete' };
//     }
//   } catch (error) {
//     console.error('Sign-in failed:', error);
//     return { success: false, message: error.message };
//   }
// };
