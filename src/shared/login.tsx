import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
class AuthService {
  signUpWithEmail = (email: string, password: string): void => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
}

export default AuthService;
