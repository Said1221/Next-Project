import Head from "next/head";

import { FaFacebook, FaGoogle, FaLinkedin, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';
import Stepper from '../components/stepper'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">



       


          <div className="flex flex-col items-center p-10">

          <p className="text-blue-500 font-bold text-2xl mb-3">Create Account</p>
          <div className="border-2 w-10 border-blue-500 inline-block mb-5"></div>

            <Stepper/>
          </div>



          <div className="w-2/5 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <img src="https://www.allen.ac.in/apps2223/assets/images/reset-password.jpg"></img>
          </div>



        </div>

      </main>
    </div>
  );
}