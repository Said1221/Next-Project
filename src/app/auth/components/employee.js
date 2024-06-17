import Head from "next/head";
import { MdNumbers } from "react-icons/md";
import '../input.css'

const Form2 = () => {
    return (

        <div className="bg-white rounded-2xl justify-center shadow-2xl flex p-5 max-w-4xl m-5">

          <div className="text-center p-5">
            <p className="text-blue-500 font-bold text-2xl">Join by the business BID</p>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

            <p className="text-gray-300 mb-2">Ask your employer about the BID so you can join</p>

            <div className="flex flex-col item-center mb-3">
              <div className="bg-gray-100 wp-64 p-2 flex item-center"><MdNumbers className="text-gray-400 m-2"/>
              <input type="text" name="businessName" placeholder="Business BID" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
            </div>
          

            <a href="./request-join" className="border-2 border-green500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500">Search</a>

          </div>

        </div>

    );
  }

export default Form2;