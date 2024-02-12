import { ChevronUp, MailIcon, Sun } from "lucide-react";

const FloatingChat = () => {
    return (
        <div className="fixed bottom-5 end-5 flex flex-col gap-1 items-center z-[1000]">
            {/* <!-- Back to Top --> */}
            <button className="h-10 w-10 bg-primary/20 backdrop-blur-3xl rounded-full text-primary flex justify-center items-center transition-all duration-500 translate-x-16 shadow-[inset_0px_0px_12px_0px] shadow-primary/40 z-10 " data-toggle="#">
                <ChevronUp className="w-4 h-4"/>
            </button>

            {/* <!-- Light/Dark Toggle --> */}
            <button className="bg-primary text-white rounded-lg z-20">
                <span className="h-9 w-9 flex justify-center items-center" id="dark-theme">
                    <MailIcon/>
                </span>
            </button>
        </div>
    );
}

export default FloatingChat;