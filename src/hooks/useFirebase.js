import initAuthentication from "../Firebase/Firbase.init";
import { useEffect, useState } from "react";
import {
  getAuth,
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
    });

    return unsubscribe;
  }, []);

  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        setUser(user);
      })
      .catch((err) => console.log(err.message));
  };

  const signInWithAny = (provider) => {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUser(user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };
  return {
    user,
    googleProvider,
    facebookProvider,
    twitterProvider,
    signInWithEmail,
    signInWithAny,
    logOut,
  };
};

export default useFirebase;
