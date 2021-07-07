import React from 'react'
import Fruits from './img/Vector (3).png'
import { Category } from './contexts/userContext'

export default function Categories() {
    const {cat,setCat}= React.useContext(Category)
   
    const category = [
        { name: 'fruits', pic: <img src={Fruits} alt='' style={{ width: '100%' }} /> }

    ]

    const content = category.map(category=>(
        <div style={{ width: '90%', height:'15%', display: 'flex', fontWeight:'bold', alignItems:'center', margin:'2%', textTransform: 'capitalize', boxShadow: '0px 4px 4px 0px #00000040',padding:'2%'}}>
            <div style={{width:'10%',height:'80%',marginRight:'5%'}}>{category.pic}</div>
            <div>{category.name}</div>
        </div>
    ))
    return (
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
             <div className='cat-head'>
                <div style={{padding:'3% 10%',fontWeight:'bold',boxShadow:'0px 4px 4px 0px #00000040'}}>Categories</div>
                <div style={{ padding: '3% 7%',borderRadius:'100%', boxShadow: '0px 4px 4px 0px #00000040', marginLeft:'5%' }}><i class="fas fa-plus"></i></div>
             </div>
            
            <div style={{ width: '100%',display:'flex',flexDirection:'column' }}>
                <input type='text' placeholder=' &#xf002; Search categories' style={{ padding: '1% 3%', background:'#FFFEF2',width:'40%'}}/>

                <div style={{width:'40%',height:'300px',display:'flex',overflowY:'scroll',flexDirection:'column'}}>{content}</div>
            </div>
        </div>
    )
}
