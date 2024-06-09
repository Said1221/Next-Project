import Head from "next/head";

import { FaFacebook, FaGoogle, FaLinkedin, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';

import './input.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>create next app</title>  
      </Head>  

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">


          <div className="w-2/5 bg-blue-500 text-white rounded-2xl py-36 px-12">
            <a href="./signIn" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">LOGIN</a>
          </div>



      </main>
    </div>
  );
}