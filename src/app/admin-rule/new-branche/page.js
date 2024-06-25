"use client"
import React from "react"
import {Alert} from "reactstrap"
import Image from 'next/image'
import sweet from '../images/sweets.png';
import food from '../images/diet.png';
import drink from '../images/drink.png';
import table from '../images/table.png';
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';




const aquaticCreatures = [
  { label: 'food', value: 'food' },
  { label: 'sweet', value: 'sweet' },
  { label: 'drink', value: 'drink' },
];




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
            <input type="text" name="name" placeholder="Enter Branche Name" className=" outline-none ml-2 text-sm"/>

            <h2 className='text-blue-500 font-extrabold'>phone Number</h2>
            <input type="number" name="phone" placeholder="Enter Phone Number" className=" outline-none text-sm ml-2"/>


          </div>
      
      </div>

    <div>

        <div className='flex flex-col item-center mb-10 justify-center'>
        <h2 className='text-blue-500 font-extrabold'>Location</h2>
        <input type="text" name="location" placeholder="Enter your Branche Location" className=" outline-none text-center text-sm flex-1 ml-2"/>
        </div>
    
    </div>

      <div>

        <div className='flex flex-col item-center mb-5 justify-center'>
        <h2 className='text-blue-500 font-extrabold'>City</h2>
        <input type="text" name="city" placeholder="Enter your Branche City" className=" outline-none text-center text-sm flex-1 ml-2"/>
        </div>
    
    </div>


    <div className="flex flex-col">
    <h2 className='text-blue-500 font-extrabold mb-2'>select kitchens</h2>
    
    <div className="flex justify-center items-center mb-5">


    <CreatableSelect  isMulti options={aquaticCreatures} classNamePrefix="dsadsa"/>
    

  

      

      

    </div>
    </div>


    <div className="flex flex-col">
    <h2 className='text-blue-500 font-extrabold mb-2'>select zone</h2>
    
    <div className="flex justify-between items-center mb-5">
        <label className="flex item-center text-xs"><input type="checkbox" name="outdoor" className="mr-1"/>Outdoor</label>
        <label className="flex item-center text-xs"><input type="checkbox" name="indoor" className="mr-1"/>Indoor</label>
        <label className="flex item-center text-xs"><input type="checkbox" name="upstairs" className="mr-1"/>Upstairs</label>
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
    >Save
    </a>

    </div>



    
    
    </div>

  </div>




</div>

</main>

            
        </div>

    );
}