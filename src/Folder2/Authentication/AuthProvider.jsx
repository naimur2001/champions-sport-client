import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signOut,  } from "firebase/auth";


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


 const authInfo={
  user,
  loading,
  createUser,
  signIn,
  logOut,

  
 }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
 };
 
 export default AuthProvider;