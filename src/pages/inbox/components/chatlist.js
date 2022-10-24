import classNames from "classnames"
import { NavLink, useParams } from "react-router-dom"

export default function ChatList(){
    const {conversationId}=useParams()
    const chats=[
        {
        id:1,
        user:{
            avatar:"https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png",
            name:"Erlik"
        },
        lastMessage:'Merhaba'
        },
        {
            id:2,
            user:{
                avatar:"https://mymusicstudio.s3.amazonaws.com/upload/photos/d-avatar.jpg",
                name:"Petronas"
            },
            unrade:true,
            lastMessage:'Mesajını aldım'
            },
            {
                id:3,
                user:{
                    avatar:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
                    name:"BGY"
                },
                lastMessage:'KEKW'
                }
    ]
    return(
        <div className="h-[calc(100%-60px)] overflow-auto py-3 ">
            <header className="flex items-center justify-between px-5 mb-1">

            <h6 className="text-base font-semibold">Messages</h6>
            <button className="text-brand text-sm font-semibold" >
                16 requests
            </button>
            </header>
            {chats.map(chat=>(
                <NavLink 
                className={classNames({
                    "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5":true,
                    "font-semibold":chat?.unrade,
                    "!bg-[#efefef]":+conversationId===chat.id
                })}
                key={chat.id}
                 to={`/inbox/${chat.id}`}>
                    <img src={chat.user.avatar} className="w-14 h-14 rounded-full "/>
                    <div>
                <h6 className="text-sm">{chat.user.name}</h6>
                        <p className={`text-sm ${!chat?.unrade && 'text-[#8e8e8e]'}`} >
                    {chat.lastMessage}

                        </p>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}