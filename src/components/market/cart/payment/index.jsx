import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Back from '../../../images/svg/Back'
import { Order } from '../../extras/userContext'
import axios from 'axios'
import './payment.scss'
import UseScript from './useScript'

export default function Payment() {
    const {order,setOrder}=useContext(Order)
    const testKey={
        public:'pk_test_f111edd46517cecd2a5879f3466ceb851a7f48d9',
        secret:'sk_test_d642821d784df4d1b38b1e2367e0e0c63be35a3b'
    }
    const header={
       "Authentication":`${testKey.secret}`,
       "content-type":"application/json"
    }

    const pay=()=>{
        axios.request('https://js.paystack.co/v1/inline.js',header).then(response=>console.log(response))
    //     let handler = PaystackPop.setup({
    //         key: 'pk_test_xxxxxxxxxx', // Replace with your public key
    //         email: document.getElementById("email-address").value,
    //         amount: document.getElementById("amount").value * 100,
    //         ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    //         // label: "Optional string that replaces customer email"
    //         onClose: function () {
    //             alert('Window closed.');
    //         },
    //         callback: function (response) {
    //             let message = 'Payment complete! Reference: ' + response.reference;
    //             alert(message);
    //         }
    //     });
    //     handler.openIframe();
    }
    
    return (
        <div class='payment cart'>
             
            <div className='head'>
                <Link  to='/cart' >
                    <Back />
                </Link>
            </div>
           
            <div style={{ display: 'flex', width: '100%', height: '86px', background:'#55DB52',justifyContent:'center',alignItems:'center',marginBottom:'2%',flexDirection:'column',position:'relative',marginTop:'15%'}}>
                <div style={{ display: 'flex', width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ width: '10%', height: '60%', background: '#D4AF37', borderRadius: '100%', display:'flex',alignItems:'center',justifyContent:'center'}}>1</div>
                    <div style={{width:'40%',height:'10%',background:'#D4AF37'}}></div>
                    <div style={{ width: '10%', height:'60%', background: '#d4af37',borderRadius:'100%',textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center' }}>2</div>
                </div>
               <div style={{display:'flex',width:'80%',justifyContent:'space-between',marginRight:'10%'}}>
                    <div>Verify Cart Content</div>
                    <div>Payment</div>
               </div>

           </div>
           <div style={{height:'80%',width:'100%'}}>
                  
                  <table>
                      <thead>
                    
                        <th colspan='2'>summary</th>
                      
                      </thead>
                      <tbody>
                          <tr>
                              <td>Name:</td>
                            <td class='td'>{order.name}</td>
                          </tr>
                        <tr>
                            <td>Location:</td>
                            <td class='td'>{order.address} , {order.zone}</td>
                        </tr> 
                        <tr>
                            <td>total amount:</td>
                            <td class='td'>N{order.total_price}</td>
                        </tr>
                      </tbody>
                      
                      <button onClick={pay} >PAY</button>

                  </table>
            </div>
           
        
        </div>
    )
}
