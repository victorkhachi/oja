import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import config from "../../config";
import Remove from "./remove";

const Component = ({data})=> {
    const { url } = config
    const [array, setArray] = useState([])
    
    const category=data.category
    const token = localStorage.getItem('token')
    const items = async () => {
        try {
            const { status, data } = await axios({
                method: 'get',
                url: `${url}products/`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "application/json"
                },
                data:category

            })
            console.log(status, data);
          setArray(data.product)    

        }
        catch (error) {
            console.log(token)

            console.log(error.response)

        }
        console.log();
    }
    useEffect(()=>items(),[url])

    
    const {  removeCat,removeProd } = Remove()
    
    const remove=async()=>{
       await removeCat(data.id)
    //  array.map(items => removeProd(items.id))

       document.location.reload()
    }
    const click=()=>{
        
        localStorage.setItem('cat',data.category)
    }
      
  
    
    
    return(
        <Fragment>
            <div   style={{ width: '90%', height: '15%', display: 'flex', fontWeight: 'bold', alignItems: 'center', margin: '2%', textTransform: 'capitalize', padding: '1%', justifyContent: 'space-between' }}>
                <Link onClick={click} to='/products'><div>{data.category}</div></Link>
                <div style={{ textShadow: '0px 0px 2px grey' }} onClick={remove}>remove</div>
            </div>
            <hr></hr>
        </Fragment>
    )
}

export default Component;

