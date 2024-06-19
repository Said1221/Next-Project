import Image from 'next/image'
import user from '../images/user.png';
import '../input.css'


export default function Result(){
  return(

    <div className="flex flex-col items-center justify-center min-h-screen py-2 w-full bg-white">

<h1 className="text-blue-500 mt-40 font-extrabold text-2xl">Welcome Said Emad</h1>
<h3 className="text-gray-500 px-5 mt-10 text-center">This page provides detailed information about BID and the owner information <br/> Please review the following details carefully before request join to this business or get back to previous step</h3>

  <main className="flex items-center justify-center w-full px-20 text-center m-10">

    <div className="flex rounded-2xl shadow-2xl">


      <div className="p-5">
        <p className="text-blue-500 font-bold text-2xl">Employer Information</p>
        <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>

        <div className="py-30 px-2 mt-5">

          <div className="item-center mb-10 justify-center">

              <div>
                <h2 className='text-blue-500 mr-2 font-extrabold'>First Name</h2>
                <p className='text-gray-500'>Mohamed</p>
              </div>

              <div className=' flex flex-col mt-10 items-center'>
                <h2 className='text-blue-500 mr-2 font-extrabold'>Last Name</h2>
                <p className='text-gray-500'>Ahmed</p>
              </div>
          
          </div>

        <div>

            <div className='flex flex-col item-center mb-10 justify-center'>
            <h2 className='text-blue-500 mr-2 font-extrabold'>Email</h2>
            <p className='text-gray-500'>elines444@gmail.com</p>
            </div>
        
        </div>

          <div>

            <div className='flex flex-col item-center mb-10 justify-center'>
            <h2 className='text-blue-500 mr-2 font-extrabold'>Location</h2>
            <p className='text-gray-500'>Alexandria , Egypt kilo 21 Agamy</p>
            </div>
        
        </div>


        <div className='flex justify-between'>
        <a href="./subscription" className="border-2 border-red-500 mr-2 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-red-500">Back</a>
        <a href="#" className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:border-white hover:text-green-500">Join</a>

        </div>
        
        
        </div>

      </div>


      <div className="bg-blue-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">

      <Image src= {user} objectFit="cover" className='bg-white rounded-full inline-block h-20 w-20 '/>

        <h2 className="text-3xl font-bold mb-2">Business name</h2>
        <p>+201003254786</p>
      </div>

    </div>

  </main>
</div>

);
};