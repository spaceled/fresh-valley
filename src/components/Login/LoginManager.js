import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
export const createUser = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    // Signed in 
    const user = result.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
  
  