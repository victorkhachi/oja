import config from "../../../../config";
import axios from 'axios'
import {  useContext,  useEffect,  useState } from "react";
import { StoreOtp } from "../../../market/extras/userContext";


export default function Reset(){
     const {url}=config
    //  const [getEmail, setGetEmail]=useState({email:''})
     const [message,setMessage]=useState('')
     const {otp, setOtp} =useContext(StoreOtp)
    const [display,setDisplay]=useState('none')
    const [redirect, setRedirect] = useState(false)

    const PassReset= async (email)=>{

        try {
            const { status, data } = await axios.post(`${url}user/requestPasswordReset`, JSON.stringify(email), {
                headers: {
                    "content-type": "application/json"
                }
            });
            console.log(data,status);
            setOtp(data.otp)
            setRedirect(true)

            setDisplay('inline-block')
        } 
        
        catch (error) {
            setMessage(error.response.data.message);
        }
            
        }
        
        useEffect(() => setRedirect(), [])
        useEffect(()=>setOtp(),[])
        useEffect(()=>setDisplay(),[])
       
        
    
      

      return{
         PassReset,  message,display,redirect
     }





}