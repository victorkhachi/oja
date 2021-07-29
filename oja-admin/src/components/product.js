import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
   const products=[
           {
               name:'name',
               unit:'unit',
               price:'price'
        
       }, 
       {
           name: 'name',
           unit: 'unit',
           price: 'price'

       },
       {
           name: 'name',
           unit: 'unit',
           price: 'price'

       }

    ]
    
    return (
        
    <div style={{width:'100%',height:'100%',textTransform:'capitalize',fontWeight:'bold'}}>
        <h1>Products</h1>
        <div style={{width:'100%',height:'40%',overflowY:'scroll'}}>
         {products.map(product=>(
            <div style={{boxShadow:'0px 0px 2px black',height:'30px',display:'flex',width:'100%',justifyContent:'space-between'}}>
                <div>{product.name}</div> <div>{product.price}/{product.unit}</div> <div>Remove</div>
            </div>
    ))}
       </div>
       <Link to ='/addProducts' style={{boxShadow:'0px 0px 2px 2px black', padding:'2%'}}>Add products</Link>

        </div>
    )
}
