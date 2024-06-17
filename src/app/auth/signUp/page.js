import Head from "next/head";
import Stepper from '../components/stepper'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

        <div className="flex items-center justify-center bg-white rounded-2xl shadow-2xl flex max-w-4xl">

          <div className="flex flex-col items-center p-10">
            <p className="text-blue-500 font-bold text-2xl mb-3">Create Account</p>
            <div className="border-2 w-10 border-blue-500 inline-block mb-5"></div>
            
            <Stepper/>
          
          </div>

        </div>

      </main>
    </div>
  );
}