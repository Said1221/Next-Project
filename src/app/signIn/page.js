import Head from "next/head";

import { FaFacebook, FaGoogle, FaLinkedin, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';

import '../input.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">


          <div className="w-3/5 p-5">
            <p className="text-blue-500 font-bold text-2xl">Sign in to Account</p>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>


            <div className="flex justify-center my-2">
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaFacebook className="text-sm"/></a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaLinkedin className="text-sm"/></a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1"><FaGoogle className="text-sm"/></a>
            </div>

            <p className="mb-5 text-gray-500 text-sm">or use you email account</p>
            
           
           
           
            <div className="py-30 px-12">

              
            <div className="flex flex-col item-center mb-3">
              <div className="bg-gray-100 wp-64 p-2 flex item-center"><FaRegEnvelope className="text-gray-400 m-2"/>
              <input type="email" name="email" placeholder="Email address" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
            </div>

            <div className="flex flex-col item-center mb-3">
              <div className="bg-gray-100 wp-64 p-2 flex item-center"><MdLockOutline className="text-gray-400 m-2"/>
              <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
            </div>


            

            <div className="flex w-100 mb-10 justify-between">
              <label className="flex item-center text-xs"><input type="checkbox" name="remember" className="mr-1"/>Remember me</label>
              <a href="#" className="text-xs hover:text-green-500">forget password ?</a>
            </div>


            <a href="#" className="border-2 border-green500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500">Sign In</a>

            </div>

          </div>



          <div className="w-2/5 bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello World!!!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up personal information and start journey with us.</p>
            <a href="./signUp" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign Up</a>
          </div>



        </div>

      </main>
    </div>
  );
}