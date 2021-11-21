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
                data:{name:order.name,address:order.address,tel:order.tel,total_price:order.total_price,list:order.list,notes:order.notes,zone:order.zone,reference:ref}
            })
            console.log(status, data);
                // console.log(order);
            
        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }
        // console.log(order);
    }
    
    





        return {
          TakeOrder
        }

            
        
    }