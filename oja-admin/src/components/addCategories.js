import React from 'react'
import useCategory from './extras/hooks/createCategory'
import {Link} from 'react-router-dom'
export default function AddCategories() {
    const [cat , setCat]=React.useState({name:''})
    const {addCat,setAddCategory}=useCategory()
    const change=(e)=>{
        setCat({name:e.target.value})
        
    }
    
    function create(cat) {
        setAddCategory(cat)
        addCat()
    }
        
         
            //  for (let index = 0; index < categories.length; index++) {
            //  }
        
         
    
    return (
        <div style={{width:'100%',height:'80%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
            <form onSubmit={(e)=>{
                e.preventDefault()
                create(cat)}} >
              <input type='text' name='name' onChange={change} placeholder='Input Category' required style={{padding:'2%'}}/>
                <button style={{
                    background:'#A5060A',
                    marginLeft:'10px',
                    color:'white',fontWeight:'bold',
                    padding:'3%',borderRadius:'2em'}}>Add Category</button>
            </form>
            <Link to='/dashboard'> Back to categories</Link>
        </div>
    )
}
