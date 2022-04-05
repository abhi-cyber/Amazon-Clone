import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    

    return (
        <div className='payment'>
            <div className='payment__container'>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    

                </div>

                {/* Payment section - Review Items */}
                <div className='payment__sectioin'></div>

                {/* Payment section - Payment Method */}
                <div className='payment__sectioin'></div>

            </div>
        </div>
    )
}

export default Payment