import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Searcher } from '../../../market/extras/userContext'



export default function Top(props) {
    const {searcher,setSearcher}=useContext(Searcher)
    const searching = (e) => {
        setSearcher(e.target.value)
        console.log(searcher);
    }



    return (
        <div style={{width:'100%',height:'10%', display:'flex',alignItems:'center', justifyContent:'space-between'}}>
            <h1 className='desktop-name'>
                ọjà.com
            </h1>
            <div style={{width:'fit-content',display:'flex'}}>
               <input type='text' placeholder='search items' style={{padding:'10px',borderRadius:'1em 0 0 1em'}} onChange={searching} />
                <Link to='/searchCategory' style={{ borderRadius:'0 2em 2em 0', background: '#A5060A',color:'white',fontWeight:'bold',fontSize:'10px',padding:'5%'}}>Search</Link>
            </div>
            
            <div style={{width:'15%'}}>
                <select onClick={props.help} className='top-option'>

                    <option selected disabled hidden>help</option>
                </select>
            </div>

        </div>
    )
}
