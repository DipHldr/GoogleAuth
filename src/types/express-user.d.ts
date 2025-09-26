import { Profile } from "passport-google-oauth20";

declare global {
  namespace Express {
    interface User extends Profile {
      displayName: string;
      id: string;
      photos?: { value: string }[]; // Allow undefined
      emails?: { value: string }[];
    }
  }
}

export {}; // Ensure it's treated as a module
