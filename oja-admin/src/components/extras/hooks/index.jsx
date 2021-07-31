import { Fragment, useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { Products } from "../contexts";
import Remove from "./remove";

const Component = ({data})=> {
    const {  removeCat } = Remove()
    const {cat, setCat}=useContext(Products)
    const remove=async()=>{
       await removeCat(data.id)
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

