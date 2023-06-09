import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import useToast from "../../../Hooks/useToast";
import Swal from "sweetalert2";
const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  console.log(cart);
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        classesId: cart.map((item) => item._id),
        status: "service pending",
        instructorEmail: cart.map((item) => item.instructorEmail),
        classesName: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        // if (res.data.result.insertedId) {
        //   // display confirm
        //   console.log("payment successfull");
        // }
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payment has been successfull',
          showConfirmButton: false,
          timer: 2500
        })
      });
    }
  };
  return (
    <>
      <div>
        <form
          className=" w-2/5 mx-auto min-h-screen  flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <div className="shadow-xl border p-4 rounded-lg  ">
            <h2 className="text-lg uppercase border p-2 bg-slate-400 text-white rounded font-bold text-center">
              Confirm Purchase
            </h2>
            <div className="h-[400px] flex flex-col justify-center">
              <input
                type="email"
                disabled
                defaultValue={user.email}
                placeholder="Type here"
                className="input input-bordered rounded input-md w-full   mb-2"
              />
              <input
                type="email"
                disabled
                defaultValue={user.displayName}
                placeholder="Type here"
                className="input input-bordered rounded input-md w-full   mb-2"
              />

              <CardElement
                className="border bg-white   rounded p-4"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <button
                className="btn btn-primary w-full btn-sm mt-4"
                type="submit"
                disabled={!stripe || !clientSecret || processing}
              >
                Pay
              </button>

              {/* message */}

              {transactionId && (
                <div className="alert bg-amber-200 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Transaction complete with Transaction ID: <strong> {transactionId}</strong>
                  </span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
