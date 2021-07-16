
import React from 'react'
import useCategory from './hooks/createCategory';


export default function SelectCat() {
    const {categories,setCatID,removeCat}=useCategory()
    
    

    const content = categories.map(category =>(
            
            <div style={{ width: '90%', height: '15%', display: 'flex', fontWeight: 'bold', alignItems: 'center', margin: '2%', textTransform: 'capitalize', boxShadow: '0px 4px 4px 0px #00000040', padding: '2%',justifyContent:'space-between' }}>
                <div>{category.category}</div>
                <div style={{textShadow:'0px 0px 2px grey'}} onClick={()=>{
                    console.log(category.id);
                    setCatID(category.id)
                    removeCat()
                }
                }>remove</div>
            </div>
        )
    )
       
    return (
        <div style={{width:'100%',height:'100%',boxShadow:'0px 0px 3px grey',overflowY:'scroll'}}>
            {content}
        </div>
    )
}
