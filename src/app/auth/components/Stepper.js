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
import { toast } from 'sonner';
import { title } from "process";
import { styleText } from "util";





const Stepper = () => {

    
    const steps = ["Email Address" , "OTP Code" , "Personal Info" , "Create Password"];

    const [currentStep , setCurrentStep] = useState(1);
    const [complete , setComplete] = useState(false);


    const [email , setEmail] = useState("");
    const [code , setCode] = useState("");

    const [fName , setFirst] = useState("");
    const [lName , setLast] = useState("");
    const [phone , setPhone] = useState("");
    const [password , setPassword] = useState("");
    const [ticket , setTicket] = useState("");


    const postEmail = async () => {
        let res = await fetch("http://localhost:8080/api/auth/email/submit" , {
            method : "POST" , 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify ({
                email
            }),
        })
        
        const data = await res.json().then((response)=>{
           if(response.status != 400){

                toast.success('Verification code has been sent' , {style : {color:'green'}}),
                currentStep == steps.length ? setComplete(true) :
                setCurrentStep((prev)=> prev+1),
                console.log(currentStep),
                console.log(steps.length)
            }

            else{
               toast.error('Invalid email' , {style : {color:'red'}})
          }
        })
      
    
    }



    const postCode = async () => {
        let res = await fetch("http://localhost:8080/api/auth/email/verify" , {
            method : "POST" , 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify ({
                email , code
            }),
        })
        const data = await res.json().then((response)=>{

           if(response.ticket != null){

                //toast.success('Valid Email' , {style : {color:'green'}}),
                console.log(response.ticket);
                setTicket(response.ticket);

                currentStep == steps.length ? setComplete(true) :
                setCurrentStep((prev)=> prev+1),
                console.log(currentStep),
                console.log(steps.length)
            }
        });
        //setTicket(data.ticket);
        //console.log(data.ticket);
        
       
    }



    const postInfo = async () => {
        let res = await fetch("http://localhost:8080/api/auth/signup" , {
            method : "POST" , 
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify ({
                'firstName' : fName , 'lastName' : lName , 'phone' : phone , 'password' : password , 'ticket' : ticket
            }),
        });

        const data = await res.json().then((response)=>{
           if(response.status != 500) {

                //toast.success('Valid Email' , {style : {color:'green'}}),
                console.log('refreshToken :---->' , response.refreshToken);
                console.log('accessToken :---->' , response.accessToken);
                
                currentStep == steps.length ? setComplete(true) :
                setCurrentStep((prev)=> prev+1),
                console.log(currentStep),
                console.log(steps.length)

           }
        })
    }



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
             <input type="email" name="email" placeholder="Email address" className="bg-gray-100 outline-none" onChange={(event) => setEmail(event.target.value)}/></div>


        </div>

        </div>
        
        :
        
        currentStep === 2 ?
        
        <div className="w-full mb-10">
            <div>
    
              <p className="text-gray-500 mb-5">Please enter the OTP code sent to your registered Email address to verify your identity.</p>

              <div className="bg-gray-100 p-2 flex mb-5"><MdOutlineVerifiedUser className="text-gray-400 m-2"/>
                <input type="password" name="otp" placeholder="OTP Code" className="bg-gray-100 outline-none" onChange={(event)=>setCode(event.target.value)}/>
              </div>

            </div>
            
        </div>
        


        
        : 
        currentStep ===3 ?
        
        
        <div className="w-full mb-10">

            <div>
                
                <p className="text-gray-500 mb-5">"Enter your contact information: Please provide your primary contact details including your First Name , Last Name and phone number.</p>

                     
                <div className="bg-gray-100 p-2 flex mb-5"><IoMdPerson className="text-gray-400 m-2"/>
                    <input type="name" name="fname" placeholder="First Name" className="bg-gray-100 outline-none" onChange={(event)=>setFirst(event.target.value)}/>
                </div>

                <div className="bg-gray-100 p-2 flex mb-5"><RiParentFill className="text-gray-400 m-2"/>
                    <input type="name" name="lname" placeholder="Last Name" className="bg-gray-100 outline-none" onChange={(event)=>setLast(event.target.value)}/>
                </div>

                <div className="bg-gray-100 p-2 flex"><FaPhoneAlt  className="text-gray-400 m-2"/>
                    <input type="phone" name="phone" placeholder="Phone Number" className="bg-gray-100 outline-none" onChange={(event)=>setPhone(event.target.value)}/>
                </div>

            </div>
        
        </div>
        
        
        :
  
        

        <div className="w-full mb-10">
            
            <div>
                <p className="text-gray-500 mb-5">"Create a password: For your account security, please create a strong password and It is preferable that it contain symbols and letters</p>
                <div className="bg-gray-100 p-2 flex mb-5"><RiLockPasswordLine className="text-gray-400 m-2"/>
                    <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none" onChange={(event)=>setPassword(event.target.value)}/>
                </div>

                <div className="bg-gray-100 p-2 flex mb-5"><RiLockPasswordLine className="text-gray-400 m-2"/>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" className="bg-gray-100 outline-none"/>
                </div>


            </div>
            
            
        </div>

        
        
        //<div className="w-full mb-10">
            
            //<div>
               // <Image src= {user} objectFit="cover" className='rounded-2 inline-block h-20 w-20 mb-5'/>
               // <p className="text-gray-500 mb-5">Click on the icon above and choose your profile photo</p>
           // </div>
            
       // </div>

        

    }
    

{
        !complete ? (
            <a href= "#" className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500"
                onClick={(event)=> 
                {



                    
                    currentStep == 1 ?
                    postEmail(event) : currentStep == 2 ?
                    postCode(event) : currentStep == 4 ?
                    postInfo(event) : 
                    
                    (
                        
                        currentStep == steps.length ? setComplete(true) :
                        setCurrentStep((prev)=> prev+1),
                        console.log(currentStep),
                        console.log(steps.length),
                        console.log('wait')
                    )


                    currentStep == steps.length ? setComplete(true) : setComplete(false)

             

                    


                        
                   


                  
                   
                    

                }

                
                }> {currentStep == steps.length ? "Finish" : "Next" }</a>

        ) :

       
       
         <a href= "./subscription"></a>


    }
        
        </>
    );
};


export default Stepper;

