"use client"
import Loader from "@/components/loader";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";

const ContactPage = () => {

    const {toast} = useToast()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessge] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmiteForm= async(event:React.MouseEvent<HTMLElement>)=>{
        event.preventDefault()
        setLoading(true)
      
         const data = {name, email, subject, message}
      
      await axios.post("/api/public/email", {...data}).then(({data})=>{
        setLoading(false)
        toast({
            variant: "default",
            type: "foreground",
            title: "Message",
            description: "Message envoyer"
        })
      })


    }

    return ( 
      <section id="contact" className="py-10 lg:py-20 active">
        <div className="container">
            <div className="relative z-20">
                <div className="hidden xl:block">
                    <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:-z-10 before:bg-[url('/dot.svg')]"></div>
                    <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:bg-[url('/dot.svg')]"></div>
                </div>

                <div className="grid xl:grid-cols-2 gap-6">
                    <div className="relative group">
                        <img src="https://i.ibb.co/1qfg6zJ/DSC-0834-compressed-1.jpg" className="h-full w-full object-cover rounded-lg" alt=""/>
                        <div className="absolute inset-0 rounded-xl ">
                            <div className="flex items-end justify-center h-full">
                                <div className="max-w-md mx-auto text-center bg-gray-100/80 p-4 m-6 rounded-xl">
                                    <h2 className=" text-lg font-bold text-black ">{"Merci de votre intérêt pour La Vision D\'ALARM. Si vous avez des questions, des demandes d\'information, ou si vous souhaitez vous impliquer, n\'hésitez pas à nous contacter. Nous sommes impatients de vous entendre."}</h2>
                                </div>
                            </div>
                            {/* <!-- flex  End --> */}
                        </div>
                    </div>
                    {/* <!-- col End --> */}

                    <div>
                        <div className="p-8 rounded-md bg-default-100 dark:bg-default-50">
                            <form className="relative">
                                <h2 className="text-2xl font-medium text-default-950">Contactez nous directement</h2>
                                <p className="py-2">{"N\'hésitez pas à utiliser le formulaire de contact ci-dessous pour nous envoyer un message :"}</p>
                                <div className="space-y-6 my-6">
                                    <div>
                                        <input onChange={(e)=> setName(e.target.value)} type="text" className="py-3 px-4 block w-full text-base rounded-lg text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent" id="formFirstName" placeholder="Nom complet" required={true}/>
                                    </div>
                                    {/* <!-- col End --> */}

                                    <div>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="py-3 px-4 block w-full text-base rounded-lg text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent" id="formEmail" placeholder="Votre Email..." required={true}/>
                                    </div>
                                    {/* <!-- col End --> */}

                                    <div>
                                        <input onChange={(e) => setSubject(e.target.value)} type="text" className="py-3 px-4 block w-full text-base rounded-lg text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent" id="formSubject" placeholder="Le sujet de votre message" required={true}/>
                                    </div>
                                    {/* <!-- col End --> */}

                                    <div>
                                        <textarea onChange={(e) => setMessge(e.target.value)} rows={5} className="py-3 rounded-lg px-4 block w-full text-base text-default-950 border-default-200 dark:bg-default-50 focus:border-default-300 focus:ring-transparent" id="formSubject" placeholder="Le contenu du message" required={true}/>
                                    </div>
                                    {/* <!-- col End --> */}
                                </div>
                                {/* <!-- grid End --> */}
                                
                                <button onClick={onSubmiteForm} type="submit" className="py-3 w-full flex items-center justify-center rounded-lg text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500">
                                  {loading && <Loader/> }  Submit Now
                                </button>
                            </form>
                            {/* <!-- From End --> */}
                        </div>
                    </div>
                    {/* <!-- col End --> */}
                </div>
                {/* <!-- grid End --> */}
            </div>
        </div>
        {/* <!-- Container End --> */}
    </section>
     );
}
 
export default ContactPage;