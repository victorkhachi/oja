import React, { useContext } from 'react'
import Step1 from '../components/market/extras/step1'
import { UserContext } from './market/extras/userContext'
import {Link} from 'react-router-dom'

//get to this page on ur app
export default function Cart(props) {
    const {value, setValue} = useContext(UserContext);
    return (
        <div style={{height:'100%',width:'100%',background:'white',zIndex:'600',display:'flex',flexDirection:'column',alignItems:'center'}} >
            <Link to='/items' style={{width:'100%',height:'8%',position:'fixed',background:'white',zIndex:'60'}}>
                <i class=" fa-2x fas fa-arrow-left" style={{marginLeft:'5%',marginTop:'10px' }} onClick={props.closeCart}></i>
            </Link>
           
            <div style={{ display: 'flex', width: '100%', height: '10%', background:'#55DB52',justifyContent:'center',alignItems:'center',marginBottom:'5%',flexDirection:'column',position:'relative',marginTop:'15%'}}>
                <div style={{ display: 'flex', width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ width: '10%', height: '60%', background: '#D4AF37', borderRadius: '100%', display:'flex',alignItems:'center',justifyContent:'center'}}>1</div>
                    <div style={{width:'40%',height:'10%',background:'white'}}></div>
                    <div style={{ width: '10%', height:'60%', background: 'white',borderRadius:'100%',textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center' }}>2</div>
                </div>
               <div style={{display:'flex',width:'80%',justifyContent:'space-between',marginRight:'10%'}}>
                    <div>Verify Cart Content</div>
                    <div>Payment</div>
               </div>

           </div>
           <div style={{height:'80%',width:'100%'}}>

             <Step1 />
            </div>
           
        </div>
    )
}
