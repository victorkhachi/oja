import config from '../../../../config.js';
import axios from 'axios';
import {useState,useContext} from 'react'
import { Order} from '../../../market/extras/userContext.js';


export default function Login(){
    const [getLoginValues, SetGetLoginValues] = useState({email:'',password:''});
    const { url } = config;
    const {order,setOrder}=useContext(Order)
    

    const SignIn = async () => {
        
         const { status, data } = await axios.post(`${url}user/login`, JSON.stringify(getLoginValues), {
            headers: {
                "content-type": "application/json"
            }
        });
        console.log(status);
        console.log(data)
        if (status===200){
            window.location.replace('/location')
            setOrder(order.name=`${data.first_name} ${data.last_name}`,order.tel=data.tel)
            console.log(order);
            
        }
        else{
            console.log(data.message , status);
        }
         
    }

    return{
        SignIn,SetGetLoginValues
    }


}
//this is it

