"use client"
import { useState } from "react";

const ContactPage = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessge] = useState("")

    const onSubmiteForm= ()=>{

      console.log(name, email, subject, message);
      
      


    }

    return ( 
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
        <div className="bg-white max-w-4xl mx-auto w-full">
          <div className="grid md:grid-cols-6 h-full">
            <div className="bg-yellow-800 p-10 col-span-2">
              <h2 className="mb-10 font-bold text-2xl text-gray-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Infos Contact</h2>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                 Address
                <span className="font-normal text-xs text-gray-300 block">
                Quartier Katingo, Avenu Beni N-212, Bloc III, Goma RDC
                </span>
              </p>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Numero de Téléphone
                <span className="font-normal text-xs text-gray-300 block">+243 997 728 753</span>
              </p>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Address Mail
                <span className="font-normal text-xs text-gray-300 block">info@alarm-congo.org / alarmcongo@yahoo.fr</span>
              </p>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Site Web
                <span className="font-normal text-xs text-gray-300 block">www.alarmrdc.com</span>
              </p>
      
            </div>
            <div className="bg-gray-50 p-14 col-span-4">
              <h2 className="mb-14 font-bold text-4xl text-gray-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Entrer en contact</h2>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input type="text" onChange={(e) => setName(e.target.value)} className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Votre nom" ></input>
                </div>
              </div>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input type="email" onChange={(e) => setEmail(e.target.value)} className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Email Adresse" ></input>
                </div>
                <div className="flex flex-col">
                  <input type="text" onChange={(e)=>setSubject(e.target.value)} className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Sujet" ></input>
                </div>
              </div>
              <div className="mb-6">
                <textarea onChange={(e)=> setMessge(e.target.value)} className="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Votre message ici" name="" id="" rows={8}></textarea>
              </div>
              <div className="flex justify-center">
                <button className="rounded-full bg-gray-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-gray-800 transition-all">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ContactPage;