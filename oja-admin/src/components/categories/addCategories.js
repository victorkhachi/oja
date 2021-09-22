import React, { useEffect } from 'react'
import useCategory from '../extras/hooks/createCategory'
import {Link} from 'react-router-dom'
export default function AddCategories() {
    const [cat , setCat]=React.useState({name:''})
    const {addCat,setAddCategory,message}=useCategory()
    const change=(e)=>{
        setCat({name:e.target.value})
        
    }


    const create=(e)=> {
        e.preventDefault()
        if (cat.name.trim()!=='') {
            setAddCategory({name:cat.name})
            addCat()
            console.log(cat);
        }
        else{
            alert("fields can't be empty")
        }
        
    }
    useEffect(()=>setAddCategory(),[])
        
         
    
    return (
        <div style={{width:'100%',height:'80%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
            <form onSubmit={create} >
              <input type='text' name='name' onChange={change} placeholder='Input Category' required style={{padding:'2%'}}/>
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
