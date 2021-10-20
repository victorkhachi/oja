import React from 'react';
// import Location from '../../images/setLocation.png'
// import Shop from '../../images/addTocart.png'
import AddToCart from '../../images/svg/AddToCart';
import Rider from '../../images/svg/Rider';
import SetLocation from '../../images/svg/SetLocation';

const Bottom = () => {
    return (
        <div style={{display:'flex',width:'100%',flexDirection:'column',height:'30%',marginTop:'5%'}}>
           <div style={{width:'100%',display:'flex',height:'10%',justifyContent:'center',alignContent:'center',padding:'2% 0',fontWeight:'bolder'}}>How it works</div> 
           <div className='direction-cont'>
                <div className='direction'>
                   <SetLocation />
                   <div>Set Location</div>
               </div>
                <div className='direction'>
                    <AddToCart />
                    <div>Add Items to Cart</div>
               </div>
                <div className='direction'>
                    <Rider />
                    <div>Speed delivery</div>
                </div>

           </div>
        </div>
    );
}

export default Bottom;
