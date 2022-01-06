import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Help from '../../../images/svg/Help'
import RedLogo from '../../../images/svg/RedLogo'
import { Searcher } from '../../../market/extras/userContext'





export default function Top(props) {
    const {key,setKey}=useContext(Searcher)
    



    return (
        <div style={{width:'100%',height:'10%', display:'flex',alignItems:'center', justifyContent:'space-around'}}>
            <h1 className='desktop-name'>
                <RedLogo />
            </h1>
            <div style={{width:'fit-content',display:'flex'}}>
               <input type='text' placeholder='search items' style={{padding:'10px',borderRadius:'1em 0 0 1em'}} onChange={(e)=>setKey(e.target.value)} />
                <Link to ='/search' style={{ borderRadius:'0 2em 2em 0', background: '#A5060A',color:'white',fontWeight:'bold',fontSize:'10px',padding:'5%'}} >Search</Link>
            </div>
            
            <div style={{width:'100px'}} onClick={props.help} >
                <Help />
            </div>

        </div>
    )
}
