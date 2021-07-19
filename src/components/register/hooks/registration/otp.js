import { StoreOtp } from "../../../market/extras/userContext";
import {useState,useContext} from 'react'
import axios from 'axios'
import config from "../../../../config"; 

export default function OtpEnter(){
    const { otp, setOtp } = useContext(StoreOtp)
    const [otpMessage, setOtpMessage] = useState('')
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
       
           const { status, data } = await axios.post(`${url}user/resetPassword`, JSON.stringify(user), {
               headers: {
                   "content-type": "application/json"
               }
           });
           console.log(data, status);
        }
      

    return{
        otpMessage, otpInput,newPassword,setUser,user
    }
}