import Head from "next/head";

import { IoBusinessOutline } from "react-icons/io5";
import { BsMenuUp } from "react-icons/bs";
import { MdNumbers } from "react-icons/md";
import '../input.css'

const Form = () => {
    return (

        <div className="bg-white rounded-2xl justify-center shadow-2xl flex p-5 max-w-4xl m-5">


          <div className="text-center p-5">
            <p className="text-blue-500 font-bold text-2xl">Enter your Business Information</p>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

            <div className="flex flex-col item-center mb-3">
              <div className="bg-gray-100 wp-64 p-2 flex item-center"><IoBusinessOutline className="text-gray-400 m-2"/>
              <input type="text" name="businessName" placeholder="Business Name" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
            </div>

            <div className="flex flex-col item-center mb-3">
              <div className="bg-gray-100 wp-64 p-2 flex item-center"><BsMenuUp className="text-gray-400 m-2"/>
              <input type="number" name="vat" placeholder="VAT" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
            </div>


            <div className="flex flex-col item-center mb-3">
              <div className="bg-gray-100 wp-64 p-2 flex item-center"><MdNumbers className="text-gray-400 m-2"/>
              <input type="number" name="cr" placeholder="CR Number" className="bg-gray-100 outline-none text-sm flex-1 remove-arrow"/>
              </div>
            </div>
            

            <a href="../admin-rule" className="border-2 border-green500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500">Submit</a>



          </div>

        </div>

    );
  }

export default Form;