"use client"
import React from "react"
import Image from 'next/image'
import logo from '../images/logo.png';
import { useState } from "react";

const Navbar = () => {

    const[isClicked , setIsClicked] = useState(false);
    const toggleNavbar = () =>{
        setIsClicked(!isClicked)
    }

    return (

        <nav className="bg-gray-50 fixed w-full shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-30">
                    <div className="flex items-center">
                        <div >
                            <Image src= {logo} width={100} />
                        </div>
                    </div>

                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-4">
                        <a href="#" className="text-black hover:text-green-500 font-semibold">Home</a>
                        <a href="#" className="text-black hover:text-green-500 font-semibold">Sign In</a>
                        <a href="#" className="text-black hover:text-green-500 font-semibold">Sign Out</a>
                        <a href="#" className="text-black hover:text-green-500 font-semibold">About</a>
                        <a href="#" className="bg-white text-black rounded-full border-2 border-green-500 px-6 py-2 hover:text-white hover:bg-green-500">Get in touch</a>
                    </div>


                    </div>

                
                <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-black bg-white
                        focus:outline-none focus:ring-2 focus:ring-black"
                        onClick={toggleNavbar}
                        > 

                        {
                            isClicked ? (
                                <svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d = "M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (


                                <svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d = "M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>



                            )
                        }

                        </button>

                    </div>

                </div>
                

            </div>

            {
                isClicked && (
                    <div className="md:hidden">
                        <div className="flex flex-col items-center justify-center pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-black block hover:text-green-500 font-semibold">Home</a>
                        <a href="#" className="text-black block hover:text-green-500 font-semibold">Sign In</a>
                        <a href="#" className="text-black block hover:text-green-500 font-semibold">Sign Out</a>
                        <a href="#" className="text-black block hover:text-green-500 font-semibold">About</a>
                        <a href="#" className="bg-white text-black inline-block rounded-full border-2 border-green-500 px-6 py-2 hover:text-white hover:bg-green-500">Get in touch</a>
                        </div>

                    </div>
                )
            }

        </nav>

    );
}

export default Navbar;
