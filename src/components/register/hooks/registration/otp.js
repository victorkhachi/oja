import { StoreOtp } from "../../../market/extras/userContext";
import {useState,useContext, useEffect} from 'react'
import axios from 'axios'
import config from "../../../../config"; 

export default function OtpEnter(){
    const { otp, setOtp } = useContext(StoreOtp)
    const [otpMessage, setOtpMessage] = useState('')
    const [redirect,setRedirect]=useState(false)

    const {url}=config
    const [user,setUser]=useState({email:'',password:''})


    const otpInput = (input) => {

        if (otp === input) {

            window.location.replace('/password')
        }
        else {
            setOtpMessage('wrong token entered')
        }
    }

   const newPassword= async ()=>{
       try{
           const { status, data } = await axios.post(`${url}user/resetPassword`, JSON.stringify(user), {
               headers: {
                   "content-type": "application/json"
               }
           })
           console.log(data);
           setRedirect(true)
        }
        catch(error){
            console.log(error.response);
        }
    }
    useEffect(()=>setRedirect(),[])
    console.log(redirect);
      

    return{
        otpMessage, otpInput,newPassword,setUser,user,redirect
    }
}