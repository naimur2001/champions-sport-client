import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";


export  const AuthContext=createContext(null);
const auth = getAuth(app);
 const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true);
// emailpass

const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password);
}
// signin
const signIn=(email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}
// logout
const logOut=()=>{
  setLoading(true);
  return signOut(auth);
}

useEffect(()=>{
  setLoading(true)
   const unsubscribe= onAuthStateChanged(auth,(currentUser) =>{
    setUser(currentUser);

  });
  return ()=>{
    return unsubscribe();
  }
},[])

const updateUserProfile=(name,photo)=>{
  setLoading(true)
  return updateProfile(auth.currentUser,{
    displayName: name,photoURL:photo
  })
}
const googleProvider=new GoogleAuthProvider()
const googleSignIn=()=>{
  setLoading(true);
  return signInWithPopup(auth,googleProvider)
}


 const authInfo={
  user,
  loading,
  createUser,
  signIn,
  logOut,
  updateUserProfile,
  googleSignIn
  
 }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
 };
 
 export default AuthProvider;