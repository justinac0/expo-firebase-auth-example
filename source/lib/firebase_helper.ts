
import { User } from "firebase/auth";

import { firebaseApp } from "../firebase/config";

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

const getAuth = () => getAuthRaw(firebaseApp);

export const firebaseSignout = () => {
  return getAuth().signOut();
};

export const firebaseRegisterEmailAndPassword = (
  email: string,
  password: string
): Promise<void | RegisterResult> => {
  return createUserWithEmailAndPassword(getAuth(), email, password)
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

export const firebaseSignInEmailAndPassword = (
  email: string,
  password: string
): Promise<void | LoginResult> => {
  return signInWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      return LoginResult.SUCCESS;
    })
    .catch((error) => {
      console.error(error);
      return LoginResult.FAILED;
    });
};
