import React from 'react'
import { Link } from 'react-router-dom'

export default function Categories() {
   const categories=[
       { 
         id:1,
         category:'vegetables',
         pic:'../images/Meat-Market-1 1.jpg'
       },
       {
           id: 2,
           category: 'vegetables',
           pic: '../images/vegetables.png'
       },
       {
           id: 3,
           category: 'vegetables',
           pic: '../images/vegetables.png'
       }
   ]
   console.log(categories[1].pic);
   const content = categories.map((category=>(
       <div key={category.id} style={{width:'80%',display:'flex',margin:'auto',height:'100px',marginTop:'5%',justifyContent:'space-between'}} >
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
                         }}>{category.category}</div>
           </div>
   )))
     

    return (
        <div className='category' >
            <div style={{display:'flex',width:'50%',justifyContent:'space-between',alignItems:'baseline'}}>
                <Link to='/' style={{  width: '15%', height: '50px', margin: '20px 0px 0px 10px' }} className='back'>back</Link>
                <p>Categories</p>
            </div>
            {content}
        </div>
    )
}
