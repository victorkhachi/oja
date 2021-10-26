import React, { useContext } from 'react'
import SelectCat from '../extras/category'
import {Link} from 'react-router-dom';
import { Key } from '../extras/contexts';
import Add from '../img/svg/add'

export default function Categories() {
    const {key,setKey}=useContext(Key)
    const search=(e)=>{
        setKey(e.target.value)
        
    }
    
    console.log(key);
    return (
        <div style={{width:'374px',display:'flex',flexDirection:'column',alignItems:'center'}}>
             <div className='cat-head'>
                <div style={{width:"75%",fontWeight:'bold',boxShadow:'0px 4px 4px 0px #00000040',height:'50px'}}>Categories</div>
                <Link to='/addCategories'><Add /></Link>
             </div>
            <input type='text' placeholder=' &#xf002; Search categories' style={{ padding:'2% 3%', background: '#FFFEF2', width: '80%'}} onChange={search} />

            <div style={{ width: '100%',display:'flex',flexDirection:'column' }}>

                <div style={{width:'100%',height:'300px',display:'flex',flexDirection:'column'}}>
                    <SelectCat />
                </div>
            </div>
        </div>
    )
}
