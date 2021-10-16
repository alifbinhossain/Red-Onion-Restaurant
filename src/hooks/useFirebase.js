import initAuthentication from "../Firebase/Firbase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signOut,
} from "firebase/auth";

initAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const createNewAccountWithEmail = (email, password, name, address) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password, name, address)
      .then((result) => {
        const user = result.user;
        user.displayName = name;
        user.address = address;
        setUser(user);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithAny = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  return {
    user,
    loading,
    setLoading,
    createNewAccountWithEmail,
    updateProfile,
    googleProvider,
    facebookProvider,
    twitterProvider,
    signInWithEmail,
    signInWithAny,
    logOut,
    error,
  };
};

export default useFirebase;
