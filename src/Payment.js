import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    // Hooks for Stripe
    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    const handleSubmit = e => {
        // do all the fancy stripe
    }

    const handleChange = event => {
        // Listen for changes in the card element and display errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>House No. 1595/1</p>
                        <p>Chandigarh</p>
                    </div>

                </div>

                {/* Payment section - Review Items */}
                <div className='payment__sectioin'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment Method */}
                <div className='payment__sectioin'>
                <div className='payment__sectioin'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* STRIPE */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                        </form>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Payment