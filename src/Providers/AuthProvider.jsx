import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // create user email and password
  const createUserEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const googleSingin = () => {
    return signInWithPopup(auth, provider);
  };

  // current user save

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // logout user
  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (currentUser, name) => {
    return updateProfile(currentUser, name);
  };
  const authInfo = {
    user,
    loading,
    googleSingin,
    logOut,
    updateUserProfile,
    loginUser,
    createUserEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
