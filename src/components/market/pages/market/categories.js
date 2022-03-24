import React  from 'react'
import { Link } from 'react-router-dom'
import Back from '../../../images/svg/Back'
import Category from '../../extras/category'
import Search from '../../extras/search'



export default function Categories() {
    const {categories}=Search()
   const content = categories.map((category=>(
      <Category data={category} />
   )))
   
     

    return (
        <div className='category' >
            <div style={{display:'flex',width:'100%',alignItems:'center',height:'50px'}} className='pad'>
                <Link to='/' className='none back' style={{
                    width: '15%', marginRight:'15px'}} ><Back /></Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',margin:'0'}}>Categories</p>
            </div>
            <div className='cat-content'>
                {content}
            </div>
        </div>
    )
}
