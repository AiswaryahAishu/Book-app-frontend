import { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // Register User
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign-In
  const signInWithGoogle = async () => {
    return await signInWithPopup(auth, googleProvider);
  };
  // Logout User
  const logoutUser = async () => {
    return signOut(auth);
  }
  // manage user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if(user){
        const{email,displayName,photoURL} = user;
        const userData={
          email,username:displayName,photo:photoURL
        }
      }
    });
    return ()=>unsubscribe();

  },[])

  const value = { currentUser,loading, registerUser, loginUser, signInWithGoogle, logoutUser};

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Prevent rendering until auth state is checked */}
    </AuthContext.Provider>
  );
};

export default AuthContext;
