import { useState } from "react";
import Header from "./components/header";
import Messages from "./components/messages";
import Reply from "./components/reply";

export default function Chat(){
    const user={
        name:'Erlik',
        avatar:'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png'
    }
    const [messages, setMessages] = useState([
		{
			from: {
				id: 'qBkLL5VeBVS87iErMj3oe8XuVxX2',
				name: 'erlik',
				username: 'erliksj61',
				avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'GCi7SGntyEhuQme16Jzh5HVS14F3',
				name: 'Resul Bişgin',
				username: 'resulbsgn',
				avatar: 'https://mymusicstudio.s3.amazonaws.com/upload/photos/d-avatar.jpg'
			},
			message: 'test'
		}
    ])
    return(
        <div className="flex-1">
            <Header user={user}/>
                <Messages messages={messages}/>
            <Reply/>
        </div>
    )
}