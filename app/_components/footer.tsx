const FooterAlarm = () => {
    return ( 
<div className="w-full min-h-screen flex items-center justify-center">
        <div className="md:w-2/3 w-full px-4 text-black flex flex-col">
            <div className="w-full text-2xl md:text-4xl lg:text-7xl font-bold">
                <h1 className="w-full md:w-2/3"><span className=" text-yellow-800">ALARM</span> R.D.CONGO</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400 text-2xl">Empowering African Leaders Reconciling African Communities</p>
                <div className="w-44 pt-6 md:pt-0">
                    <a href="/contactez-nous" className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between">
                    
                    <a className=" cursor-pointer text-gray-600 hover:text-gray-700 uppercase">Apropos de nous</a>
                    <a href="/contactez-nous" className=" cursor-pointer text-gray-600 hover:text-gary-700 uppercase">Contactez Nous</a>
                    
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2020 Bwimba Dimer Bw.Inc.</p>
            </div>
        </div>
        </div>
     );
}
 
export default FooterAlarm;