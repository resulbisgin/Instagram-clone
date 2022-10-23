import {initializeApp} from "firebase/app";
import {getAuth, signOut, onAuthStateChanged, updateProfile,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore"
import {userHandle} from "utils";

const firebaseConfig = {
	apiKey:"AIzaSyBjxtxRzkBvmBJ2OqC-a6MLBcjc0XDRrxg",
	authDomain:"instagram-cb208.firebaseapp.com",
	projectId:"instagram-cb208",
	storageBucket:"instagram-cb208.appspot.com",
	messagingSenderId:"5260169108",
	appId:"1:5260169108:web:2223b2fb042f65d70fc981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db=getFirestore(app)
onAuthStateChanged(auth,async user => {	 
if(user){
const dbUser=	await getDoc(doc(db,"users",user.uid))
	let data={
		uidl:user.uid,
		full_name:user.displayName,
		email:user.email,
		emailVerified:user.emailVerified,
		...dbUser.data()
	}
	userHandle(data)
}else{
	userHandle(false)
}
})

export const login = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
		return response
	} catch (err) {
		toast.error(err.code)
	}
}
export const register = async ({email, password,full_name,username}) => {
	try {
		const user=await getDoc(doc(db,"usersnames",username))
		if(user.exists()){
			toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
		}else{
		const response = await createUserWithEmailAndPassword(auth, email, password)
		if(response.user){
		

		await setDoc(doc(db,"usersnames",username),{
			uid:response.user.uid
		})
		await setDoc(doc(db,"users",response.user.uid),{
			full_name,
			username,
			followers:[],
			following:[],
			notification:[]
		})

		await updateProfile(auth.currentUser,{
			displayName:full_name
		})
		return response.user
	}
	}
	

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