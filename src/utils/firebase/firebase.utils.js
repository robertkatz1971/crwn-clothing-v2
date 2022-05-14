// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkV_qZaaeRcl6msZXJfTRit5T2SES_cfs",
  authDomain: "crown-clothing-db-31b10.firebaseapp.com",
  projectId: "crown-clothing-db-31b10",
  storageBucket: "crown-clothing-db-31b10.appspot.com",
  messagingSenderId: "721728358485",
  appId: "1:721728358485:web:2656d2bd563841f2a7ecdc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log(`error creating the user (${error.message}`);
        }
    }

    return userDocRef;

    //check if user data exists

    //return userDocRef

    //if not exists
    //se
};




