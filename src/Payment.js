import React, {useEffect, useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from "react-router-dom";
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    // Hooks for Stripe
    const stripe = useStripe();
    const elements = useElements();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret that allows us to charge a customer

        const getClientSecret = async () => {
            const response = await axios({ // Popular fetching library
                method: 'post',
                // Stripe expects the total in a currencies submits
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true); // This stops From multiple pushes on the Buy Now button

        
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

                            <div className='payment__priceContainer'>
                            <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Payment