import axios from 'axios'
import { useContext, useEffect} from 'react'
import config from '../../../config'
import { Order } from './userContext'


export default function GetOrder() {

    const { url } = config
    const {order,setOrder}=useContext(Order)
    const token = localStorage.getItem('token')

    // const [categories, setCategories] = useState([{}])
    // const [item, setItem] = useState([])
    const TakeOrder = async (ref) => {
        try {
            const { status, data } = await axios({
                method: 'post',
                url: `${url}orders/`,
                headers: {
                    "Authorization":`Bearer ${token}`,
                    "content-type": "application/json"
                },
                data:order

            })
            console.log(status, data);
            
        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }
        console.log(order);
    }
    
    





        return {
          TakeOrder
        }

            
        
    }