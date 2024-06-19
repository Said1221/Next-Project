import React from "react"
import "../input.css"
import Image from 'next/image'
import home from '../images/home.png';
import suppliers from '../images/distribution.png';
import employee from '../images/employee.png';
import branches from '../images/branch.png';
import stores from '../images/supermaket.png';
import setting from '../images/settings.png';

const SideNav = () => {
    return(
        
        <div className="md:w-60 bg-gray-100 min-h-screen border-r border-zinc-200 hidden md:flex">
            <div className="flex flex-col space-y-6 w-full">
               
               <div className="flex flex-col space-y-2 md:px-6 mt-6 items-start">
               <a href="#" className="text-blue-800 font-bold text-2xl">Business Name</a>
               <div className="border-2 w-full border-blue-800 inline-block mb-2"></div>

               <div className="flex hover:border-gray-200 border-2 border-gray-100 w-full rounded-full p-2">
                <Image src= {home} width={30}/>
                <a href="./" className="ml-2">Home</a>
                </div>

                <div className="flex hover:border-gray-200 border-2 border-gray-100 w-full rounded-full p-2">
                <Image src= {suppliers} width={30}/>
                <a href="#" className="ml-2">Suppliers</a>
                </div>

                <div className="flex hover:border-gray-200 border-2 border-gray-100 w-full rounded-full p-2">
                <Image src= {employee} width={30}/>
                <a href="#" className="ml-2">Employees</a>
                </div>


                <div className="flex hover:border-gray-200 border-2 border-gray-100 w-full rounded-full p-2">
                <Image src= {branches} width={30}/>
                <a href="admin-rule/branches" className="ml-2">Branches</a>
                </div>


                <div className="flex hover:border-gray-200 border-2 border-gray-100 w-full rounded-full p-2">
                <Image src= {stores} width={30}/>
                <a href="#" className="ml-2">Stores</a>
                </div>
                

                <div className="flex hover:border-gray-200 border-2 border-gray-100 w-full rounded-full p-2">
                <Image src= {setting} width={30}/>
                <a href="#" className="ml-2">Setting</a>
                </div>





               </div>

            </div>
        </div>



    );
}

export default SideNav;