import config from "../../config";
import axios from 'axios'


export default function AddProd() {
const {url}= config




const addProd= async(body)=>{
try {
    const { status, data } = await axios({
        method: 'post',
        url: `${url}products/add`,
        headers: {
            "content-type": "application/json"
        },
        data: {body: body }

    })
    console.log(body);
    console.log(status, data);
}
 catch (error) {
   console.log(error.response)
    
}  
}

return{
   addProd
}

}