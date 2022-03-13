import React from 'react';
import {useMoralis} from "react-moralis"
function LoginDisplay(props) {
   
    const {authenticate} = useMoralis()

    return (
        
        <div className= 
        'mr-20 flex mt-60 justify-end absolute z-20 w-full h-full ' >
            <div className='w-1/3 flex-col flex justify-center h-1/2 ' >
            <h2 className='text-3xl font-serif  text-blue-600'>BRING YOUR DIGITAL WORLD TO YOURSELF</h2>
            <button onClick={authenticate}
            className='p-5 w-1/2 ml-10 text-pink-500 animate-pulse font-bold bg-white'>Login Into Metaverse</button>
            </div>
        </div>
    );
}

export default LoginDisplay;