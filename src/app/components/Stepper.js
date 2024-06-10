"use client"
import React, { useState } from "react";
import "./style.css"
import "../input.css"
import { TiTick } from "react-icons/ti";
import { FaFacebook, FaGoogle, FaLinkedin, FaRegEnvelope , FaPhoneAlt} from 'react-icons/fa';
import { IoMdPerson } from "react-icons/io";
import { RiParentFill , RiLockPasswordLine  } from "react-icons/ri";






const Stepper = () => {
    const steps = ["Business Info" , "Personal Info" , "Contacts"];
    const [currentStep , setCurrentStep] = useState(1);
    const [complete , setComplete] = useState(false);
    return (
        <>
        
        <div className="flex justify-center mb-20">
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
            <p className="text-gray-500 mb-5">"Enter your name: Please input your full name This will help us personalize your experience and ensure accurate communication.</p>
          <div className="bg-gray-100 p-2 flex mb-5"><IoMdPerson className="text-gray-400 m-2"/>
          <input type="name" name="fname" placeholder="First Name" className="bg-gray-100 outline-none"/>
          </div>

          <div className="bg-gray-100 p-2 flex"><RiParentFill className="text-gray-400 m-2"/>
          <input type="name" name="lname" placeholder="Last Name" className="bg-gray-100 outline-none"/>
          </div>

        </div>



        




        </div>


        
        :
        currentStep ===2 ?
        
        
        <div className="w-full mb-10">

              <div>
            <p className="text-gray-500 mb-5">"Enter your contact information: Please provide your primary contact details including your email address and phone number.</p>
          <div className="bg-gray-100 p-2 flex mb-5"><FaRegEnvelope className="text-gray-400 m-2"/>
          <input type="email" name="email" placeholder="Email address" className="bg-gray-100 outline-none"/>
          </div>

          <div className="bg-gray-100 p-2 flex"><FaPhoneAlt  className="text-gray-400 m-2"/>
          <input type="phone" name="phone" placeholder="Phone Number" className="bg-gray-100 outline-none"/>
          </div>

        </div>



        




        </div>
        
        
        :
        

        <div className="w-full mb-10">

              
              <div>
            <p className="text-gray-500 mb-5">"Create a password: For your account security, please create a strong password.</p>
          <div className="bg-gray-100 p-2 flex mb-5"><RiLockPasswordLine className="text-gray-400 m-2"/>
          <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none"/>
          </div>


        </div>



        




        </div>

    }
    




{
        !complete ? (
            <a href= "#" className="border-2 border-green500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500"
                onClick={()=>
                {
                    currentStep == steps.length ? setComplete(true) :
                    setCurrentStep((prev)=> prev+1);
                    console.log(currentStep);
                    console.log(steps.length);
                }
                
                }> {currentStep == steps.length ? "Finish" : "Next" }</a>

        ) :

        <a href= "../subscription"></a>


    }




    
   
        
        </>
    );
};



export default Stepper;
