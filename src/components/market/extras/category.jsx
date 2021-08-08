import { Fragment, useContext } from "react"
import { Link } from "react-router-dom"
import { Products } from "./userContext"

const Category =({data})=>{
    const { cat, setCat } = useContext(Products)
    const set=()=>{
        setCat(data.category)
        
    }
    return(
        <Fragment>
            <Link to='/items' key={data.id} onClick={set} className='categories'>
                <div className='cat-name'>{data.category}</div>
            </Link>
        </Fragment>
    )
}
export default Category;