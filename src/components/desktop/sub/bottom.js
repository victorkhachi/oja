import React from 'react';
// import Location from '../../images/setLocation.png'
// import Shop from '../../images/addTocart.png'
import AddToCart from '../../images/svg/AddToCart';
import Rider from '../../images/svg/Rider';
import SetLocation from '../../images/svg/SetLocation';

const Bottom = () => {
    return (
        <div style={{display:'flex',width:'100%',flexDirection:'column',height:'30%'}}>
           <div className='bottom-head'>How it works</div> 
           <div className='direction-cont'>
                <div className='direction'>
                   <SetLocation />
                   <div className='write-up'>Set Location
                        <span>Select the location you want your products delivered to</span></div>
               </div>
                <div className='direction'>
                    <AddToCart />
                    <div className='write-up'>Add Items to Cart
                        <span>Add all your product to cart</span></div>
               </div>
                <div className='direction'>
                    <Rider />
                    <div className='write-up'>Speed delivery
                        <span>Get your orders at your doorstep in no time</span></div>
                </div>

           </div>
        </div>
    );
}

export default Bottom;
