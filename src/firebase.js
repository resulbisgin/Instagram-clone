import {initializeApp} from "firebase/app";
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
import {userHandle} from "utils";

const firebaseConfig = {
    apiKey: "AIzaSyBjxtxRzkBvmBJ2OqC-a6MLBcjc0XDRrxg",
    authDomain: "instagram-cb208.firebaseapp.com",
    projectId: "instagram-cb208",
    storageBucket: "instagram-cb208.appspot.com",
    messagingSenderId: "5260169108",
    appId: "1:5260169108:web:2223b2fb042f65d70fc981"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, user => {
	userHandle(user || false)
})

export const login = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}