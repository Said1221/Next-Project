"use client"
import React , {useState} from 'react'
import '../input.css'
import { IoMdAdd } from "react-icons/io";
import { MdEdit , MdDelete } from "react-icons/md";
import swal from 'sweetalert2';
import Swal from 'sweetalert2';




const Home = () => {

   const [drop , setDrop] = useState(false);

   return (
<>
        
      <div>
        <nav className="bg-gray-50 w-full mb-10 outline-none">
           <div className="flex items-center justify-center" >

           <div className='flex items-center bg-green-700 hover:bg-green-800 m-2 text-white'><IoMdAdd className='ml-2 text-2xl font-bold'/>
           <a href = "./new-branche" className='p-2 text-white'>new branche</a>

           </div>
         
           </div>
        </nav>





        <div className='flex justify-between bg-gray-100 items-center p-4 mr-5 ml-5 hover:animate-pulse delay-150 hover:border-green-500 border-b-2 duration-300'
       
       onClick={()=>{

         
      

       }}

       >
           <h2 className='items-center'>Main Branche</h2>
           <h2 className='items-center'>01002819302</h2>
           <h2 className='items-center'>El agamy kilo 21</h2>

           <div className='flex items-center justify-center'>
           <a href='./edit-branche' className='text-green-500 mr-2'><MdEdit/></a>
           <a href='' className='text-red-500'><MdDelete/></a>
           </div>




           

        </div>



    

     
        





      


       
       
       </div>
</>


   );

}

export default Home;