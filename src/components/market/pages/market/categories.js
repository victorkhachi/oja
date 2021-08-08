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
            <div style={{display:'flex',width:'50%',justifyContent:'space-between',alignItems:'baseline'}}>
                <Link to='/' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><Back /></Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>Categories</p>
            </div>
            <div className='cat-content'>
                {content}
            </div>
        </div>
    )
}
