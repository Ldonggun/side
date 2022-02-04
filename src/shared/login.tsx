import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
class AuthService {
  signUpWithEmail = (email: string, password: string) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  };
}

export default AuthService;
