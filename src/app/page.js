"use client"
import Head from "next/head";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { x, y } from './store/slice'
import './input.css'

export default function Home() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  
  //return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(x())}
        >
          add
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(y())}
        >
          sub
        </button>
      </div>
    </div>
  //);
  
  
  
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <Head>
        <title>create next app</title>  
      </Head>  
  
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-blue-500 text-white rounded-2xl py-36 px-12">            
            <a href="./auth/signIn" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">LOGIN</a>
        </div>
      </main>
    </div>
  );
}