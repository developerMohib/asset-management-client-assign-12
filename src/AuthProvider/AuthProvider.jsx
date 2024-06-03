import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import Proptypes from "prop-types";
import auth from "../Firebase/Firebase.config";
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export const AuthCustomContext = createContext(null);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosPublic = useAxiosPublic() ;
  // sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update Profile
  const updateProfileUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // email password login
  const loginWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google sign in
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // facebook sign in
  const loginWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  // log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    user,
    setUser,
    loading,
    loginWithEmailPass,
    loginWithGoogle,
    loginWithFacebook,
    createUser,
    updateProfileUser,
    logOut,
  };
  return (
    <AuthCustomContext.Provider value={userInfo}>
      {children}
    </AuthCustomContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: Proptypes.node,
};
export default AuthProvider;
