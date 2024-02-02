const HeroWithBG = () => {
    return ( 
  
        <div className="w-full bg-center bg-cover"
        style={{ backgroundImage: "url(https://i.ibb.co/LNDK2G8/chidren-happy.jpg)" }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">ALARM RDC</span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Renforcer les leaders africains pour la réconciliation des communautés africaines.</h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default HeroWithBG;