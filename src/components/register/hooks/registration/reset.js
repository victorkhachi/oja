import config from "../../../../config";
import axios from 'axios'
import {  useContext,  useEffect,  useState } from "react";
import { StoreOtp } from "../../../market/extras/userContext";


export default function Reset(){
     const {url}=config
     const [getEmail, setGetEmail]=useState({email:''})
     const [message,setMessage]=useState('')
     const {otp, setOtp} =useContext(StoreOtp)
    const [display,setDisplay]=useState('none')

    const PassReset= async ()=>{

        try {
            const { status, data } = await axios.post(`${url}user/requestPasswordReset`, JSON.stringify(getEmail), {
                headers: {
                    "content-type": "application/json"
                }
            });
            console.log(data,status);
            setOtp(data.otp)
            setDisplay('inline-block')
        } 
        
        catch (error) {
            console.log(error.response);
        }
            
        }
        console.log(otp);
        useEffect(()=>setOtp(),[])
        useEffect(()=>setDisplay(),[])
       
        
    
      

      return{
         PassReset, setGetEmail, message,display
     }





}