import Icon from "components/Icon";

export default function Reply(){
    return (
        <footer className="h-[84px] flex items-center justify-center px-6">
            <div className="h-11  border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
        <button className="w-[40px] h-[42px] flex items-center justify-center ">
            <Icon name="emoji" size={24}/>
        </button>
        <input className="flex-1  outline-none  h-10 text-sm px-[9px] placeholder:text-black focus:placeholder:text-gray-500 transition-colors" placeholder="Message"/>
        <button className="w-[40px] h-[42px] flex items-center justify-center ">
            <Icon name="picture" size={24}/>
        </button>
        <button className="w-[40px] h-[42px] flex items-center justify-center ">
            <Icon name="like" size={24}/>
        </button>
            </div>
        </footer>
    )
}