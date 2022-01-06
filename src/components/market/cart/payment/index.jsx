import React, { useContext } from "react";
import { Link ,useHistory} from "react-router-dom";
import Back from "../../../images/svg/Back";
import { Order } from "../../extras/userContext";
import "./payment.scss";
import PaystackPop from "@paystack/inline-js";
import GetOrder from "../../extras/Order";




export default function Payment() {
  const { order, setOrder } = useContext(Order);
 const {TakeOrder}=GetOrder()
 const history=useHistory()
  const testTotal = order.total_price *100; //always add extra two zeros, calculation always done in kobo
  const testMail = localStorage.getItem('email'),
    testkey = "pk_live_918d954b38c1a38e08f9eef097d599a196e3bde2";

  //   console.log(testkey);
  const paystack = new PaystackPop();

  const initiateTransaction = () => {
     if(order.total_price>0){
    paystack.newTransaction({
      amount: testTotal,
      email: testMail,
      key: testkey,
      name: "radiance obi",
      onCancel: () => window.alert("oh, dear u canceled"),
      onSuccess:  (e) => {
        TakeOrder(e.reference)
        
      },
    });
}
  };
  console.log(order)
  return (
      <div className=' payment cart'>
           <div className='head'>
                <div  onClick={()=>history.goBack()}>
                    <Back />
                </div>
            </div>
             <div style={{ display: 'flex', width: '100%', height: '86px', background:'#55DB52',justifyContent:'center',alignItems:'center',marginBottom:'5%',flexDirection:'column',position:'relative',marginTop:'15%'}}>
                <div style={{ display: 'flex', width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{ width: '10%', height: '60%', background: '#D4AF37', borderRadius: '100%', display:'flex',alignItems:'center',justifyContent:'center'}}>1</div>
                    <div style={{width:'40%',height:'10%',background: '#D4AF37'}}></div>
                    <div style={{ width: '10%', height:'60%', background: '#D4AF37',borderRadius:'100%',textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center' }}>2</div>
                </div>
               <div style={{display:'flex',width:'80%',justifyContent:'space-between',marginRight:'10%'}}>
                    <div>Verify Cart Content</div>
                    <div>Payment</div>
               </div>

           </div>


           <div class='order-details'>
               
               <label><span>Location:</span><p>{`${order.address},${order.zone}`}</p></label>
               <label><span>Amount:</span><p>N{order.total_price}</p></label>
               <label><span>Customer's Name:</span><p>{order.name}</p></label>
               <label><span>Customer's Phone:</span><p>{order.tel}</p></label>
           
           
           
           </div>      
               <button>PAY</button>
      </div>
          );
}
