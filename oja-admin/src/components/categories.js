import React from 'react'
import SelectCat from './extras/category'
import {Link} from 'react-router-dom';

export default function Categories() {
    return (
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
             <div className='cat-head'>
                <div style={{padding:'3% 10%',fontWeight:'bold',boxShadow:'0px 4px 4px 0px #00000040'}}>Categories</div>
                <Link to='addCategories' style={{ padding: '3% 7%',borderRadius:'100%', boxShadow: '0px 4px 4px 0px #00000040', marginLeft:'5%' }}><i class="fas fa-plus"></i></Link>
             </div>
            
            <div style={{ width: '100%',display:'flex',flexDirection:'column' }}>
                <input type='text' placeholder=' &#xf002; Search categories' style={{ padding: '1% 3%', background:'#FFFEF2',width:'40%'}}/>

                <div style={{width:'40%',height:'300px',display:'flex',overflowY:'scroll',flexDirection:'column'}}>
                    <SelectCat />
                </div>
            </div>
        </div>
    )
}
