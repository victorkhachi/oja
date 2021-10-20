import {useEffect} from 'react'
import config from '../../../../config.js';
import axios from 'axios';
import {useState,useContext} from 'react'
import { Order} from '../../../market/extras/userContext.js';


export default function Login(){
    const [getLoginValues, SetGetLoginValues] = useState({email:'',password:''});
    const { url } = config;
    
    const {order,setOrder}=useContext(Order)
    const [error,setError]=useState('')
    const [redirect, setRedirect] = useState(false)


    const SignIn = async () => {
        try {
            const { status, data } = await axios.post(`${url}user/login`, JSON.stringify(getLoginValues), {
                headers: {
                    "content-type": "application/json"
                }
            });
                console.log(data)
                localStorage.setItem('token',data.token)
            localStorage.setItem('name', `${data.first_name} ${data.last_name}`)
            localStorage.setItem('tel', data.tel)
            localStorage.setItem('email',data.email)
                setRedirect(true)
        } catch (error) {
            
            setError(error.response.data.error)
        }     
    }
    useEffect(() => setRedirect(), [])
    

    
    return{
        SignIn,SetGetLoginValues,error,redirect,order
    }


}


