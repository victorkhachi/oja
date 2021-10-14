import { Fragment, } from "react"
import { Link } from "react-router-dom"

const Category =({data})=>{

    const set=()=>{
        localStorage.setItem('category',data.category)
        
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