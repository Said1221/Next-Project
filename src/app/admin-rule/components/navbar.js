"use client"
import React from "react"
import Image from 'next/image'
import logo from '../images/person.jpg';
import notify from '../images/notification.png';
import { useState } from "react";

const Navbar = () => {

    const[isClicked , setIsClicked] = useState(false);
    const toggleNavbar = () =>{
        setIsClicked(!isClicked)
    }

    return (

        <nav className="bg-blue-800 w-full shadow-2xl ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center m-2" >
                            <Image src= {logo} width={50} className="w-10 h-10 rounded-full p-1 rounded-full ring-2 ring-gray-300 dark:ring-white"/>
                            <div className="flex flex-col ml-5">
                            <h2 className="text-white font-bold">Said Emad</h2>
                            <h2 className="text-gray-300 text-sm">Main Branche</h2>
                        </div>
                        </div>
                    </div>

         
                    <div className="ml-4 flex items-center space-x-4">
                        <Image src= {notify} width={25} />
                    </div>


            


                </div>
                

            </div>

        </nav>

    );
}

export default Navbar;
