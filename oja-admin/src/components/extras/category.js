
import React from 'react'
import Component from './hooks';
import useCategory from './hooks/createCategory';
import {Key} from './contexts'


export default function SelectCat() {
    const { categories } = useCategory()
    const {key,setKey}=React.useContext(Key)
    const [array,setArray]=React.useState()
    console.log(categories);
   

    
       
    return (
        <div style={{width:'100%',height:'100%',boxShadow:'0px 0px 3px grey',overflowY:'scroll'}}>
           {categories.map((category,id)=>(
               <Component key={id} data={category}/>
           ))} 
        </div>
    )
}
