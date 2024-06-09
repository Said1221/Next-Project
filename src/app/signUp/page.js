import Head from "next/head";
import { FaFacebook, FaGoogle, FaLinkedin, FaRegEnvelope} from 'react-icons/fa';
import { IoMdBusiness } from "react-icons/io";
import { MdLockOutline} from 'react-icons/md';

import '../input.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">


          <div className="w-3/5 p-5">
            <p className="text-blue-500 font-bold text-2xl">Sign Up</p>
            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
                <div className="py-30 px-12">

                    





            </div>
          </div>









          <img className="w-2/10" src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228814-stock-illustration-online-registration-sign-login-account.jpg" ></img>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>

        </div>

      </main>
    </div>
  );
}