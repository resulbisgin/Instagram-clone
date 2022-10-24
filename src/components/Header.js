import {Link, NavLink} from "react-router-dom";
import Search from "components/Search";
import {logout} from "firebase.js";
import Icon from "./Icon";
import { useSelector } from "react-redux";

export default function Header() {
	const user=useSelector(state=> state.auth.user)
	return (
		<header className="bg-white border-b border-gray-300">
			<div className="flex items-center justify-between h-[60px] container mx-auto">

				<Link to="/">
					<img className="h-[29px]"
							 src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"/>
				</Link>

				<Search/>

				<nav className="flex items-center gap-x-6">
					<NavLink to="/">
						<Icon size={24} name="home"/>
											</NavLink>
						<NavLink to="/">
						<Icon size={24} name="direct"/>
											</NavLink>
											<NavLink to="/">
						<Icon size={24} name="new"/>
											</NavLink>
											<NavLink to="/">
						<Icon size={24} name="explore"/>
											</NavLink>
											<NavLink to="/">
						<Icon size={24} name="hearth"/>
											</NavLink>
					<NavLink to={`/${user.username}`}>
						<img src="/default_avatar.jpg" className="w-6 h-6 rounded-full"/>
					</NavLink>
				</nav>

			</div>
		</header>
	)
}