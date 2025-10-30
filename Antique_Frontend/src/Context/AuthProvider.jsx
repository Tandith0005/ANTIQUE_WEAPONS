import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase.config";
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  
// sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const items = {
    currentUser,
    loading,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={ items }>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
