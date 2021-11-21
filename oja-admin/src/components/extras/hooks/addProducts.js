import config from "../../config";
import axios from 'axios'
import { Redirect } from "react-router-dom";


export default function AddProd() {
const {url}= config




const addProd= async(body)=>{
    console.log(body)
try {
    const { status, data } = await axios({
        method: 'post',
        url: `${url}products/add`,
        headers: {
            "content-type": "application/json"
        },
        data:body

    })
    console.log(body);
    console.log(status, data);
    if(status===200){
        <Redirect to='/products' />
    }
}
 catch (error) {
   console.log(error.response)
   console.log(body);
    
}  
}

return{
   addProd
}

}