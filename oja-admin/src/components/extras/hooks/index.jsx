import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import config from "../../config";
import { Products } from "../contexts";
import Remove from "./remove";

const Component = ({data})=> {
    const { url } = config
    const [array, setArray] = useState([])
    const { cat, setCat } = useContext(Products)
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
        setCat(data.category)
    }
      
  
    
    
    return(
        <Fragment>
            <div   style={{ width: '90%', height: '15%', display: 'flex', fontWeight: 'bold', alignItems: 'center', margin: '2%', textTransform: 'capitalize', boxShadow: '0px 4px 4px 0px #00000040', padding: '2%', justifyContent: 'space-between' }}>
                <Link onClick={click} to='/products'><div>{data.category}</div></Link>
                <div style={{ textShadow: '0px 0px 2px grey' }} onClick={remove}>remove</div>
            </div>
        </Fragment>
    )
}

export default Component;

