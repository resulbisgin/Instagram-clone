import Button from "components/Button";
import Icon from "components/Icon";

export default function Inbox(){
    return(
        <div className="w-full h-full flex gap-y-2 items-center justify-center flex-col">
            <Icon name="direct-empty" size={96}/>
            <h2 className="text-[22px] font-light">Your Messages</h2>
            <p className="text-sm text-[#8e8e8e]">
                Send private photos and messages to a friend or group.
                </p>    
        <div className="mt-2">
        <Button>Send Message</Button>

        </div>
         </div> 
    )
}