import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const signIn = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in!");
  } catch (error) {
    console.error("Error signing in:", (error as Error).message);
  }
};
