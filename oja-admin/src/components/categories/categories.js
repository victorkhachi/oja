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
    
    
    return (
        <div style={{width:'374px',display:'flex',flexDirection:'column',alignItems:'center'}}>
             <div className='cat-head'>
                <div class='div'>Categories</div>
                <Link to='/addCategories'><Add /></Link>
             </div>
            <input type='text' placeholder=' &#xf002; Search categories' class='search_input' onChange={search} />

            <div style={{ width: '100%',display:'flex',flexDirection:'column' }}>

                <div style={{width:'100%',height:'300px',display:'flex',flexDirection:'column'}}>
                    <SelectCat />
                </div>
            </div>
        </div>
    )
}
