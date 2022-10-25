import Header from "./components/header";
import Reply from "./components/reply";

export default function Chat(){
    const user={
        name:'Erlik',
        avatar:'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png'
    }
    return(
        <div className="flex-1">
            <Header user={user}/>
                <main className="h-[calc(100%-144px)]">
                    
                </main>
            <Reply/>
        </div>
    )
}