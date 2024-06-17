import Head from "next/head";
import './input.css'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <Head>
        <title>create next app</title>  
      </Head>  

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-blue-500 text-white rounded-2xl py-36 px-12">
            <div href="./signIn" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">admin main page</div>
        </div>
      </main>
    </div>
  );
}