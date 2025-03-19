import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in!");
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};
