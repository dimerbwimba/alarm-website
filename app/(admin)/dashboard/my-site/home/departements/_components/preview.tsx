"use client"

const Preview = ({data}:any) => {
    return ( 
        <div className="">
        <div className="group relative shadow rounded-md z-2 bg-default-100 dark:bg-default-50">
            <div className="p-2">
               
                <img className=" rounded-md" alt="hello world" src={data.image} />
            </div>
          
            <div className="p-6 py-8">

                <div className="flex mb-2 text-default-950">

                    <span className="price text-3xl font-semibold mb-0">{data.name}</span>

                </div>
                <hr className="my-6 border border-dashed text-default-800 hidden xl:block" />

                {/* <p>14 days free</p> */}

                <ul role="list" className="mt-4 mb-5 -ms-3 text-sm text-default-white">
                    {data.roles.map((title:string, index:number) => (<li key={index} className="flex items-center gap-2 py-1">
                        {/* <!-- svg icon --> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="dot" className="lucide lucide-dot inline-block h-8 w-8 stroke-primary"><circle cx="12.1" cy="12.1" r="1"></circle></svg>
                        <span className="text-base text-default-950">{title}</span>
                    </li>))}

                </ul>
                {/* <a href="#" className="border inline-block  border-primary/50 text-primary py-2 px-6 rounded-md bg-primary/10 hover:text-white hover:bg-primary transition-all duration-500">Sing up</a> */}
            </div>
        </div>
    </div>
     );
}
 
export default Preview;