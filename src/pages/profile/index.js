import {getUserInfo} from "firebase.js"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "./components/header"

export default function Profil() {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(false)
    const {username} = useParams()
	const navigate=useNavigate()
    useEffect(() => {
		getUserInfo(username)
			.then(user => {
				setUser(user)
			})
			.catch(err => {
				navigate('/',{
					replace:true
				})
			})
	}, [])
	return (
		<>
		<Header user={user}/>
			Profile page={username}
            
		</>
	)
}