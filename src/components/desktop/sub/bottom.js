import React from 'react';
import './bottom.scss'
import AddTOCart from '../../images/add.png'
import Delivery from '../../images/Delivery.png' 
import Deliver from '../../images/deliver.png'

const Bottom = () => {
    return (
        <div style={{display:'flex',width:'100%',flexDirection:'column',height:'30%'}}>
           <div className='bottom-head'>How it works</div> 
           <div className='direction-cont'>
                <div className='direction'>
                  <div class='img'> <img src={AddTOCart} alt/> </div>
                   <div className='write-up'>Set Location
                        <span>Select the location you want your products delivered to</span></div>
               </div>
                <div className='direction'>
                   <div class='img'>
                       <img src={Delivery} alt />
                   </div>
                    <div className='write-up'>Add Items to Cart
                        <span>Add all your product to cart</span></div>
               </div>
                <div className='direction'>
                   <div class='img'>
                       <img src={Deliver} alt />
                   </div>
                    <div className='write-up'>Speed delivery
                        <span>Get your orders at your doorstep in no time</span></div>
                </div>

           </div>
        </div>
    );
}

export default Bottom;
