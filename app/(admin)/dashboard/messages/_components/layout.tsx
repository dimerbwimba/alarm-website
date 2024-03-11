import MessageList from "./message-list";
import MessagePreview from "./message-preview";

const MessageLayout = () => {
    return (
        <div>
            {/* <MessageNav/> */}
            <div className=" flex">
                <div className=" h-screen w-1/3 border-r ">

                    <MessageList />

                </div>
                <div className=" h-screen w-2/3">
                    <MessagePreview />
                </div>
            </div>
        </div>
    );
}

export default MessageLayout;