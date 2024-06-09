"use client"
import React, { useState } from "react";
import "./Stepper.css"
import "../Input.css"
import { TiTick } from "react-icons/ti";

const Stepper = () => {
    const steps = ["Business Info" , "Personal Info" , "Contacts"];
    const [currentStep , setCurrentStep] = useState(1);
    const [complete , setComplete] = useState(false);
    return (
        <>
        
        <div className="flex justify-center">
        {steps?.map((step , i)=> (
        <div key={i} className= {`step-item ${currentStep === i+1 && "active"} ${ (i+1 < currentStep || complete) && 'complete'} `}>
            <div className="step" >
                {
                    (i+1 < currentStep || complete) ? <TiTick size={24}/> : i+1
                }
                
                </div>
            <p className="text-gray-500">{step}</p>
        </div>    
    ))}
    
    </div>
    
    {
        !complete && (
            <button className="bg-gray-800" onClick={()=>
                {
                    currentStep === steps.length ? setComplete(true) :
                    setCurrentStep((prev)=> prev+1);
                }
            }> {currentStep == steps.length ? "Finish" : "Next" } </button>
        )


        
    }

    {
         currentStep === 1 ? <div>1</div> : currentStep ===2 ? <div>2</div> : <div>3</div>
    }
    
   
        
        </>
    );
};

export default Stepper;
