import { updateMailRead } from "@/app/redux/slice/mail-slice";
import { getSingleMailAction } from "@/app/redux/slice/mail-view-slice";
import { cn, formatTimeAgo } from "@/lib/utils";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const Message = ({mail}:any) => {
    const dispatch = useDispatch()
    const mailv = useSelector((state:any)=> state.mailView)
    const addSingleMailView = async () => {
        let updatedMail = {...mail}
        updatedMail = {...updatedMail , read:true}
        dispatch(getSingleMailAction(updatedMail))
        dispatch(updateMailRead({_id:mail._id}))
        if (!mail.read) {
            await axios.put("/api/manage-mail",{_id:mail._id}) 
        }
    }
    return (
        <div className=" px-3">
            <div onClick={addSingleMailView} className={ cn(" w-full border rounded py-1 cursor-pointer", mail.read ? "  " :" border border-red-800 " , mail._id === mailv._id && "bg-gray-100") }>
                <div className=" p-3 flex justify-between">
                    <div>
                        <div className="pb-1" >
                            <h3 className=" text-sm font-bold text-black">{mail.from}</h3>
                        </div>
                        <div>
                            <h4 className=" text-xs">{mail.subject}</h4>
                        </div>
                    </div>
                    <div>
                        <span className=" text-xs font-bold text-black">{ formatTimeAgo(mail.createdAt)}</span>
                    </div>
                </div>
                <div className="px-3 font-normal line-clamp-2 text-sm">
                    <p>
                        {mail.body}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Message;