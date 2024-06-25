"use client"
import React from "react"
import {Alert} from "reactstrap"
import Image from 'next/image'
import sweet from '../images/sweets.png';
import food from '../images/diet.png';
import drink from '../images/drink.png';
import table from '../images/table.png';






export default function Home () {

  
    return (

        <div>

            

            
         

         <main className="flex items-center justify-center px-20 text-center m-10">

<div className="flex rounded-2xl shadow-2xl">


  <div className="p-5">

    <div className="py-30 px-2 mt-5">

      <div className="item-center mb-10 justify-center">

          <div className="flex">
            <h2 className='text-blue-500 font-extrabold'>Branche Name</h2>
            <input type="text" name="name" placeholder="Main Branche" className=" outline-none ml-2 text-sm"/>

            <h2 className='text-blue-500 font-extrabold'>phone Number</h2>
            <input type="number" name="phone" placeholder="+966254123654" className=" outline-none text-sm ml-2"/>


          </div>
      
      </div>

    <div>

        <div className='flex flex-col item-center mb-5 justify-center'>
        <h2 className='text-blue-500 font-extrabold'>Location</h2>
        <input type="text" name="location" placeholder="Riyadh , 35 abou gaber street" className=" outline-none text-center text-sm flex-1 ml-2"/>
        </div>
    
    </div>

      <div>

        <div className='flex flex-col item-center mb-5 justify-center'>
        <h2 className='text-blue-500 font-extrabold'>City</h2>
        <input type="text" name="city" placeholder="Riyadh" className=" outline-none text-center text-sm flex-1 ml-2"/>
        </div>
    
    </div>







    <div className="flex flex-col items-center mb-2">
    <h2 className='text-blue-500 font-extrabold mb-2'>number of tabels</h2>
    <Image className="mr-2 mb-2" src= {table} width={40}/>
    <div className="flex items-center justify-center">
    <input type="number" name="tabels" placeholder="0" className=" text-green-500 outline-none text-center text-sm flex-1 ml-2"/>
    </div>
    </div>


    <div className='flex justify-between'>
    <a href="./branches" className="border-2 border-red-500 mr-2 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-red-500">Cancel</a>
    <a href="#" className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500"
    
    onClick={()=>
      {
        <>
        <Alert color="default">
        <strong>Default!</strong> This is a default alert—check it out!
      </Alert>
      </>
      }
    }
    >Update
    </a>

    </div>



    
    
    </div>

  </div>




</div>

</main>

            
        </div>

    );
}