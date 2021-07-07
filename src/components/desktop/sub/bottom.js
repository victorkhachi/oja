import React from 'react';
import Location from '../../images/setLocation.png'
import Shop from '../../images/addTocart.png'
import Delivery from '../../images/SpeedDelivery.jpg'

const Bottom = () => {
    return (
        <div style={{display:'flex',width:'100%',flexDirection:'column',height:'30%',marginTop:'5%'}}>
           <div style={{width:'100%',display:'flex',height:'10%',justifyContent:'center',alignContent:'center',padding:'2% 0',fontWeight:'bolder'}}>How it works</div> 
           <div className='direction-cont'>
                <div className='direction'>
                   <img src={Location} />
                   <div>Set Location</div>
               </div>
                <div className='direction'>
                    <img src={Shop} />
                    <div>Add Items to Cart</div>
               </div>
                <div className='direction'>
                    <img src={Delivery} />
                    <div>Speed delivery</div>
                </div>

           </div>
        </div>
    );
}

export default Bottom;
