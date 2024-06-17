"use client"
import React from "react"
import Image from 'next/image'
import logo from '../images/admin.png';
import notify from '../images/notification.png';
import { useState } from "react";

const Navbar = () => {

    const[isClicked , setIsClicked] = useState(false);
    const toggleNavbar = () =>{
        setIsClicked(!isClicked)
    }

    return (

        <nav className="bg-gray-50 w-full shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-30">
                    <div className="flex items-center">
                        <div className="flex items-center" >
                            <Image src= {logo} width={80} />
                            <div className="flex flex-col ml-5">
                            <h2 className="text-blue-500 font-bold">Said Emad</h2>
                            <h2 className="text-gray-500 text-sm">Main Branche</h2>
                        </div>
                        </div>
                    </div>

         
                    <div className="ml-4 flex items-center space-x-4">
                        <Image src= {notify} width={20} />
                    </div>


            


                </div>
                

            </div>

        </nav>

    );
}

export default Navbar;
