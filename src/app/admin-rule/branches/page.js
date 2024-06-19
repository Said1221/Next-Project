import React from 'react'
import '../input.css'
import { IoMdAdd } from "react-icons/io";
import { MdEdit , MdDelete } from "react-icons/md";



export default function Home() {
    return (

        
       <div>
         <nav className="bg-gray-50 w-full mb-10 outline-none">
            <div className="flex items-center justify-center" >

            <div className='flex items-center bg-green-700 hover:bg-green-800 m-2 text-white'><IoMdAdd className='ml-2 text-2xl font-bold'/>
            <a href = "#" className='p-2 text-white'>new branche</a>

            </div>
          
            </div>
         </nav>

         <div className='flex justify-between items-center bg-gray-100 p-4 mr-5 ml-5'>
            <h2>Main Branche</h2>
            <h2>01002819302</h2>
            <h2>El agamy kilo 21</h2>

            <div className='flex items-center justify-center'>
            <a href='./edit-branche' className='text-green-500 mr-2'><MdEdit/></a>
            <a href='' className='text-red-500'><MdDelete/></a>
            </div>

         </div>
        
        
        </div>



    );
}