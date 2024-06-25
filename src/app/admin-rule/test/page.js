import React from 'react'
import '../input.css'
import useSWR from 'swr'



export default async function Home(){
    
    const getProducts = async () => {
        const res = fetch('http://192.168.1.18:8080/api/auth/email/submit' , {
            method: 'POST',
      
            headers : {
              'Content-Type' : 'application/json'
            },
      
            body: JSON.stringify(
              {'email' : 'elines835@gmail.com'}
            ),
          });
      
          console.log('code sended');
          //return await res.json()
    }

    const data = await getProducts() 

    return (

        <>
        <h1>products</h1>
        <ul className='grid gridcol-4 gap-4 items-center'>

            {
                data.products.map( (item , index) => (
                    <li className='w-52 mx-4' key={index}>
                        <img src='{item.thumbnail}' alt='{item.title}' />

                        <div className='p-2 text-sm text-black bg-gray-400'>
                             <span className='rounded-lg p-1 px-1 ml-2 bg-gray-200'>${item.price}</span>

                        </div>

                    </li>
                ))
            }


        </ul>

        </>
    );
}