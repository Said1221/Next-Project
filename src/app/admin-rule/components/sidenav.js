import React from "react"
import "../input.css"
import Image from 'next/image'
import branches from '../images/branch.png';
import clock from '../images/clock.png';

const SideNav = () => {
    return(
        
        <div className="md:w-60 bg-gray-100 min-h-screen border-r border-zinc-200 hidden md:flex">
            <div className="flex flex-col space-y-6 w-full">
               
               <div className="flex flex-col space-y-2 md:px-6 mt-10 items-center">
               <a href="#" className="text-blue-500 font-bold text-2xl">El Kabs</a>
               <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

               <div className="flex">
                <Image src= {clock} width={30}/>
                <a href="#" className="ml-2">.........</a>
                </div>

                <div className="flex">
                <Image src= {clock} width={30}/>
                <a href="#" className="ml-2">.........</a>
                </div>


                <div className="flex">
                <Image src= {branches} width={30}/>
                <a href="#" className="ml-2">branches</a>
                </div>
                

                <div className="flex">
                <Image src= {clock} width={30}/>
                <a href="#" className="ml-2">.........</a>
                </div>



                <div className="flex">
                <Image src= {clock} width={30}/>
                <a href="#" className="ml-2">.........</a>
                </div>



                <div className="flex">
                <Image src= {clock} width={30}/>
                <a href="#" className="ml-2">.........</a>
                </div>


               </div>

            </div>
        </div>



    );
}

export default SideNav;