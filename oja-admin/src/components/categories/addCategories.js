import React, { useEffect } from 'react'
import useCategory from '../extras/hooks/createCategory'
import {Link} from 'react-router-dom'
export default function AddCategories() {
    
    const {addCategory,addCat,setAddCategory,message}=useCategory()
    


    const create=(e)=> {
        e.preventDefault()
        if (addCategory.name.trim()!=='') {
            
            addCat()
            console.log(addCategory);
        }
        else{
            alert("fields can't be empty")
        }
        
    }
    useEffect(()=>setAddCategory(),[])
        
         
    
    return (
        <div className='box-shadow' style={{width:'80%',height:'50%',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}} >
            <form onSubmit={create} >
                <input type='text' name='name' onChange={(e) => setAddCategory({ name:e.target.value })} placeholder='Input Category' required style={{padding:'2%'}}/>
                <button style={{
                    background:'#A5060A',
                    marginLeft:'10px',
                    color:'white',fontWeight:'bold',
                    padding:'3%',borderRadius:'2em'}}>Add Category</button>
            </form>
                <div style={{ fontSize: '1.5rem', color:'#A5060A'}}>{message}</div>

            <Link to='/dashboard'> Back to categories</Link>
        </div>
    )
}
