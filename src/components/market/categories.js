import React from 'react'
import { Link } from 'react-router-dom'
import Vegetables from '../images/vegetables.png'

export default function Categories() {
   const categories=[
       { 
         id:1,
         category:'vegetables',
         pic:Vegetables
       },
       {
           id: 2,
           category: 'vegetables',
           pic: Vegetables
       },
       {
           id: 3,
           category: 'vegetables',
           pic:Vegetables
       },
       {
           id: 4,
           category: 'vegetables',
           pic:Vegetables
       },
       {
           id: 5,
           category: 'vegetables',
           pic: Vegetables
       },
       {
           id: 6,
           category: 'vegetables',
           pic:Vegetables
       }
   ]
   
   const content = categories.map((category=>(
    
       <Link to='/items' key={category.id} style={{textDecoration:'none',width:'80%',display:'flex',margin:'auto',height:'100px',marginTop:'5%',justifyContent:'space-between'}} className='categories'>
           <div className='cat-img'><img src={category.pic} alt='' style={{width:'100%',height:'100%'}} /></div>
           <div style={{ 
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#000000',
                        marginRight:'5px'
                         }}>{category.category}</div>
           </Link>
    
   )))
   
     

    return (
        <div className='category' >
            <div style={{display:'flex',width:'50%',justifyContent:'space-between',alignItems:'baseline'}}>
                <Link to='/' style={{
                    width: '15%', height: '50px', margin: '15 % 0px 0px 5%' }} className='back'><i class=" fa-2x fas fa-arrow-left" style={{ width: '50px',marginLeft:'15px'}}></i></Link>
                <p style={{fontSize:'1.5em',fontWeight:'bold',marginLeft:'5px'}}>Categories</p>
            </div>
            {content}
        </div>
    )
}
