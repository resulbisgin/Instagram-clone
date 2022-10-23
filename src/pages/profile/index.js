import Icon from "components/Icon"
import {getUserInfo} from "firebase.js"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
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
	return user && (
		(
			<>
		<Header user={user}/>
		<nav className="border-t">
		<NavLink to={`/${username}`}>
		<Icon name="post"/>
		</NavLink>
		</nav>            
		</>
		)
	)
}