import { loadStripe } from "@stripe/stripe-js";
 import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
 
 
// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentClass = () => {
    const {classid} = useParams()
    const cart  = null;
    const total = null;
    const price =60
    return (
        <div>
             <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm classid={classid} cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentClass;