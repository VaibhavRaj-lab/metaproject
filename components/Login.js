import React from 'react';
import Image from 'next/image'
import LoginDisplay from './LoginDisplay'
import {useMoralis} from "react-moralis"
import Home from './Home';
function Login(props) {
 const {isAuthenticated} = useMoralis()
     console.log(isAuthenticated)
     if(isAuthenticated) return <Home></Home>
    return (

       
        
        <div className='relative'>
        
        <LoginDisplay></LoginDisplay>
        
        <div className='w-full h-screen'>
            
            <Image src="https://images.unsplash.com/photo-1493497029755-f49c8e9a8bbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" layout='fill' objectFit='fill'></Image>
        </div>
        </div>
        
        
       
    );
}

export default Login;