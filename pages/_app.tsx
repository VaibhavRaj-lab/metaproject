import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={"lkmVDJ4Cl8SbpOgyBwyO7WlePzL9CVJcTFX7J57W"} serverUrl={"https://cnb5st65sqly.usemoralis.com:2053/server"}>
       <Component {...pageProps} />
    </MoralisProvider>
   
  )
  
}

export default MyApp
