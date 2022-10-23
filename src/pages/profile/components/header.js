export default function Header({user}){
return(
    <header className="flex items-center gap-x-6">
        <img src="/default_avatar.jpg" alt="" className="w-[150px] h-[150px] rounded-full"/>
        <div>
            <h1>{user.full_name}</h1>
        </div>
    </header>
)
}