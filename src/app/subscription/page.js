"use client"
import React, { useState } from "react";
import Form from "../components/admin";
import '../input.css'
import Image from 'next/image'
import admin from '../images/admin.png';
import employee from '../images/employee.png';
import customer from '../images/client.png';

export default function(){

    const [color , changeColor] = useState("white");
    const [colorText , changeColorText] = useState("#3B82F6");
    const [item , selectItem] = useState("");

    return(


        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            
            <h1 className="text-blue-500 m-20 font-extrabold text-2xl">what's your situation ?</h1>
            <h3 className="text-gray-500">Select your situation: Please choose the option that best describes your current status or role within the system <br/> This information will help us tailor our services to better suit your needs. Choose from the following options</h3>

        <main className="flex items-center justify-center w-full flex-1 px-20 text-center">

        
  
        <div style={{backgroundColor: color}} className="flex flex-col rounded-2xl items-center jusify-center shadow-2xl flex w-2/3 m-5">
            <div className="w-3/5 p-5" 
            
            onClick={()=>
                {
                    changeColor("#3B82F6")
                    changeColorText('black')
                    selectItem('admin')
                }
                
                }>


            <p style={{color:colorText}} className="mb-5 font-extrabold">I am Admin</p>
            <Image src= {admin} width={400} height={400}/>

            </div>

         </div>


         <div item style={{ backgroundColor: color}} className="flex flex-col rounded-2xl items-center jusify-center shadow-2xl flex w-2/3 m-5">
            <div className="w-3/5 p-5"
            
            
            onClick={()=>
                {
                    changeColor("#3B82F6")
                    changeColorText('black')
                    selectItem('admin')
                }
                
                }
            
            
            >
            <p style={{color:colorText}} className="mb-5 font-extrabold">I am Employee</p>
            <Image src= {employee} width={400} />
            </div>

         </div>



         <div className="flex flex-col bg-white-500 rounded-2xl items-center jusify-center shadow-2xl flex w-2/3 m-5">
            <div className="w-3/5 p-5">
            <p className="text-blue-500 mb-5 font-extrabold">I am Customer</p>
            <Image src= {customer} width={400} />
            </div>

         </div>



         


          
  
        </main>

        {
            item == 'admin' ?   <Form/> : <div></div>
        }
      
      </div>


    )
}