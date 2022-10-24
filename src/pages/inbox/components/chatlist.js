export default function ChatList(){
    return(
        <div className="h-[calc(100%-60px)] overflow-auto py-3 px-5">
            <header className="flex items-center justify-between">

            <h6 className="text-base font-semibold">Messages</h6>
            <button className="text-brand text-sm font-semibold" >
                16 requests
            </button>
            </header>

        </div>
    )
}