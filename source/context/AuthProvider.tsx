import { FC, createContext, useContext, useEffect, useState } from "react";

import { firebaseApp } from "../firebase/config";

import {
  getAuth as fbGetAuth,
  createUserWithEmailAndPassword as fbCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as fbSignInWithEmailAndPassword,
  onAuthStateChanged as fbOnAuthStateChanged,
  signOut as fbSignOut,
  User as fbUser
} from "firebase/auth";

const getAuth = () => fbGetAuth(firebaseApp);

export enum LoginResult {
  SUCCESS,
  FAILED,
  // bad format
  // bad credentials
  // account doesn't exist
}

export enum RegisterResult {
  SUCCESS,
  FAILED,
  // bad format
  // account exists
}

interface Auth {
  loading: boolean
  currentUser: undefined | any,
  signOut: () => Promise<void>,
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void | LoginResult>,
  registerWithEmailAndPassword: (email: string, password: string) => Promise<void | RegisterResult>,
}

export const AuthContext = createContext<Auth | null>(null);

export const AuthProvider: FC = ({ children }) => {
  const _auth = useAuthProvider();
  return <AuthContext.Provider value={_auth}>{children}</AuthContext.Provider>;
};

const useAuthProvider = (): Auth => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const setLoadedUser: (user: fbUser | null) => void = (user) => {
    setCurrentUser(user);
    setLoading(false);
  };

  useEffect(() => {
    fbOnAuthStateChanged(getAuth(), (user) => user ? setLoadedUser(user) : setLoadedUser(null));
  }, []);

  const signOut = () => {
    return fbSignOut(getAuth());
  }

  const signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<void | LoginResult> => {
    return fbSignInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        return LoginResult.SUCCESS;
      })
      .catch((error) => {
        console.error(error);
        return LoginResult.FAILED;
      });
  };

  const registerWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<void | RegisterResult> => {
    return fbCreateUserWithEmailAndPassword(getAuth(), email, password)
      .then((response) => {
        const uid = response.user?.uid;
        console.log(uid);
        return RegisterResult.SUCCESS;
      })
      .catch((error) => {
        console.error(error);
        return RegisterResult.FAILED;
      });
  };

  return {
    loading,
    currentUser,
    registerWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  };
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (auth === null) throw new Error("Don't use `useAuth()` when no there is no parent provider.");
  return auth;
};
