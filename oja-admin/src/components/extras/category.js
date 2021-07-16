
import React from 'react'
import useCategory from './hooks/createCategory';


export default function SelectCat() {
    const {getCategory}=useCategory()
    getCategory()
    const [categories, setCategories]=React.useState([]);
    
    
    

    const content = categories.map(category => (
        <div style={{ width: '90%', height: '15%', display: 'flex', fontWeight: 'bold', alignItems: 'center', margin: '2%', textTransform: 'capitalize', boxShadow: '0px 4px 4px 0px #00000040', padding: '2%' }}>
            <div>{category.name}</div>
        </div>
    ))
    return (
        <div style={{width:'100%',height:'100%',boxShadow:'0px 0px 3px grey'}}>
            {content}
        </div>
    )
}
