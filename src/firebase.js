import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDPCA8ekP2djArwCPK-9b-uuO1SSiFVpqA",
  authDomain: "netflix-clone-404f5.firebaseapp.com",
  projectId: "netflix-clone-404f5",
  storageBucket: "netflix-clone-404f5.firebasestorage.app",
  messagingSenderId: "893634378435",
  appId: "1:893634378435:web:cad8678f632ab965cf8076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try{
        const re = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,name,authProvider: "local", email,
    } );

    } catch(error) {
        console.log(error);
        toast.error(error.code);


}
}



const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
        
    }
    catch(error) {
        console.log(error);  
        toast.error(error.code);
    }
}


const logout = () => {
   signOut(auth);
}

export {auth, db, login, signup, logout};