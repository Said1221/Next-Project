"use client"
import React, { useState } from "react";
import Form from "../components/admin";
import Form2 from "../components/employee";
import Result from "../request-join/page";
import '../input.css'
import Image from 'next/image'
import admin from '../images/admin.png';
import employee from '../images/employee.png';
import customer from '../images/client.png';

export default function(){

    const [color , changeColor] = useState("white");
    const [item , selectItem] = useState("");

    return(

        <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full bg-white">
            
            <h1 className="text-blue-500 mt-40 font-extrabold text-2xl">what's your situation ?</h1>
            <h3 className="text-gray-500 px-5 mt-10 text-center">Select your situation: Please choose the option that best describes your current status or role within the system <br/> This information will help us tailor our services to better suit your needs. Choose from the following options</h3>

            <main className="flex items-center justify-center w-full px-20 text-center m-10 flex-wrap">
                
                <div style={{boxShadow: item == 'admin' ? color : ""}} className="flex flex-col rounded-2xl items-center jusify-center w-60 p-3 shadow-2xl m-5">
                    <div className="p-5" 
            
                    onClick={()=>
                        {
                            changeColor("10px 10px 10px 1px #3B82F6")
                            selectItem('admin')
                        }

                    }>


                        <p className="mb-5 font-extrabold text-blue-500">I am Admin</p>
                        <Image src= {admin} width={400}/>

                    </div>
                    
                    {
                        item == 'admin' ? <Form/> : <div></div>
                    }

                </div>
         

                <div style={{ boxShadow: item == 'employee' ? color : ""}} className="flex flex-col rounded-2xl items-center jusify-center w-60 shadow-2xl m-5">
                    <div className="p-5"
                
                
                        onClick={()=>
                            {
                                changeColor("10px 10px 10px 1px #3B82F6")
                                selectItem('employee')
                            }
                        }
                >

                        <p className="mb-5 font-extrabold text-blue-500">I am Employee</p>
                        <Image src= {employee} width={400} />
                    </div>
                    {
                        item == 'employee' ? <Form2/> : <div></div>
                    }
                    
                </div>
                

                <div style={{ boxShadow: item == 'client' ? color : ""}} className="flex flex-col rounded-2xl items-center jusify-center w-60 shadow-2xl m-5">
                    <div className="p-5"
            
                        onClick={()=>
                            {
                                changeColor("10px 10px 10px 1px #3B82F6")
                                selectItem('client')
                            }
                        }
            >
                    <p className="text-blue-500 mb-5 font-extrabold">I am Customer</p>
                    <Image src= {customer} width={400} />
                    </div>

                </div>

        </main>

      
      </div>


    )
}