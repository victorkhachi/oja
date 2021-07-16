import config from "../../../../config";
import axios from 'axios'
import { useState } from "react";

export default function Reset(){
     const {url}=config
     const [getEmail, setGetEmail]=useState({email:''})
     const [message,setMessage]=useState('')
     const PassReset= async ()=>{
         
        try {
            const { status, data } = await axios.post(`${url}user/requestPasswordReset`, JSON.stringify(getEmail), {
                headers: {
                    "content-type": "application/json"
                }
            });
            console.log(data, status);
            window.location.replace('/OTP')
        } catch (error) {
            console.log(error.response);
        }
         
        }
      
     
      
     
     return{
         PassReset,setGetEmail,message
     }





}