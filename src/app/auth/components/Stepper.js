"use client"
import React, { useState } from "react";
import Image from 'next/image'
import user from '../images/picture.png';
import "./style.css"
import "../input.css"
import { TiTick } from "react-icons/ti";
import { FaFacebook, FaGoogle, FaLinkedin, FaRegEnvelope , FaPhoneAlt} from 'react-icons/fa';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { RiParentFill , RiLockPasswordLine  } from "react-icons/ri";






const Stepper = () => {
    const steps = ["Email Address" , "OTP Code" , "Personal Info" , "Create Password" , "Choose Photo"];
    const [currentStep , setCurrentStep] = useState(1);
    const [complete , setComplete] = useState(false);
    return (
        <>
        
        <div className="flex justify-center inline-block items-center mb-20 hidden md:flex">
        {steps?.map((step , i)=> (
        <div key={i} className= {`step-item ${currentStep === i+1 && "active"} ${ (i+1 < currentStep || complete) && 'complete'} `}>
            <div className="step" >
                {
                    (i+1 < currentStep || complete) ? <TiTick size={24}/> : i+1
                }
                
                </div>
            <p className="text-gray-500">{step}</p>
        </div>    
    ))}
    
    </div>
    
    
    {
        currentStep === 1 ?

        <div className="w-full mb-10">

        <div>
            
            <p className="text-gray-500 mb-5">"Enter your Email Address: Please provide your primary contact details including your email address.</p>

            <div className="bg-gray-100 p-2 flex mb-5"><FaRegEnvelope className="text-gray-400 m-2"/>
             <input type="email" name="email" placeholder="Email address" className="bg-gray-100 outline-none"/></div>

        </div>

        </div>
        
        :
        
        currentStep === 2 ?
        
        <div className="w-full mb-10">
            <div>
    
              <p className="text-gray-500 mb-5">Please enter the OTP code sent to your registered Email address to verify your identity.</p>

              <div className="bg-gray-100 p-2 flex mb-5"><MdOutlineVerifiedUser className="text-gray-400 m-2"/>
                <input type="password" name="otp" placeholder="OTP Code" className="bg-gray-100 outline-none"/>
              </div>

            </div>
            
        </div>
        


        
        : 
        currentStep ===3 ?
        
        
        <div className="w-full mb-10">

            <div>
                
                <p className="text-gray-500 mb-5">"Enter your contact information: Please provide your primary contact details including your First Name , Last Name and phone number.</p>

                     
                <div className="bg-gray-100 p-2 flex mb-5"><IoMdPerson className="text-gray-400 m-2"/>
                    <input type="name" name="fname" placeholder="First Name" className="bg-gray-100 outline-none"/>
                </div>

                <div className="bg-gray-100 p-2 flex mb-5"><RiParentFill className="text-gray-400 m-2"/>
                    <input type="name" name="lname" placeholder="Last Name" className="bg-gray-100 outline-none"/>
                </div>

                <div className="bg-gray-100 p-2 flex"><FaPhoneAlt  className="text-gray-400 m-2"/>
                    <input type="phone" name="phone" placeholder="Phone Number" className="bg-gray-100 outline-none"/>
                </div>

            </div>
        
        </div>
        
        
        :
         currentStep === 4 ?
        

        <div className="w-full mb-10">
            
            <div>
                <p className="text-gray-500 mb-5">"Create a password: For your account security, please create a strong password and It is preferable that it contain symbols and letters</p>
                <div className="bg-gray-100 p-2 flex mb-5"><RiLockPasswordLine className="text-gray-400 m-2"/>
                    <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none"/>
                </div>

                <div className="bg-gray-100 p-2 flex mb-5"><RiLockPasswordLine className="text-gray-400 m-2"/>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" className="bg-gray-100 outline-none"/>
                </div>


            </div>
            
            
        </div>

        :
        
        <div className="w-full mb-10">
            
            <div>
                <Image src= {user} objectFit="cover" className='rounded-2 inline-block h-20 w-20 mb-5'/>
                <p className="text-gray-500 mb-5">Click on the icon above and choose your profile photo</p>
            </div>
            
        </div>

    }
    

{
        !complete ? (
            <a href= "#" className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500"
                onClick={()=>
                {
                    currentStep == steps.length ? setComplete(true) :
                    setCurrentStep((prev)=> prev+1);
                    console.log(currentStep);
                    console.log(steps.length);
                }
                
                }> {currentStep == steps.length ? "Finish" : "Next" }</a>

        ) :

        <a href= "./subscription"></a>


    }
        
        </>
    );
};



export default Stepper;
