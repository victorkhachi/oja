import React from 'react'

export default function Middle() {
    return (
        <div className='middle'>
            <div className='middle-grad'>
              <div style={{width:'60%',marginLeft:'5%'}}>
                    Shop now and get a speedy delivery at your doorstep
              </div>
                <input style={{
                    width: '40%', padding: '2% 0', marginTop: '2%', background: '#ECCC64', border: '2px solid #ECCC64', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px', marginLeft: '5%'}} placeholder='Enter delivery address'/>
            </div>
        </div>
    )
}
