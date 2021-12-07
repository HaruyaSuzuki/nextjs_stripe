// Next.js
import Link from "next/link";

// React
import { useState, useEffect } from 'react';

// Thirdparty
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';

const cardOptions = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      lineHeight: "1.4",
      fontSize: "18px",
      "::placeholder": {
        color: "#999"
      }
    }
  }
};

interface Props {
  price: number
}

const CheckoutForm = ({ price }: Props): JSX.Element => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] =useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    window
      .fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ price })
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  useEffect(() => {
    console.log(username);
    console.log(email);
  }, [username, email])

  const handleChange = async (e: StripeCardElementChangeEvent) => {
    let error_message: any;
    setDisabled(e.empty);
    e.error ? error_message = e.error.message : error_message = "";
    setError(error_message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!
      }
    });
    if (payload.error) {
      setError("Payment failed!");
      setProcessing(false);
    } else {
      setError("");
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form id="payment-form" onSubmit={ handleSubmit }>
      <div className="payment-form_inner">
        <div className="card">
          { succeeded ? (
            <>
              <h2>お支払いが完了しました。</h2>
              <p>
                この度はご購入ありがとうございます。<br/><br/>
                フォームにて入力したメールアドレスへ確認メールを送信いたしましたので、ご確認ください。<br/>
              </p><br/>
              <p>メールが届いていない場合は、お手数ですが<Link href="/"><a>お問い合わせフォーム</a></Link>からご連絡ください。</p>
            </>
          ) : (
            <>
              <h2>お支払い</h2>
              <CardElement onChange={ handleChange } options={ cardOptions } />
              <label>お名前</label>
              <input type="text" id="username" placeholder="氏名" onChange={(e) => setUsername(e.target.value) }/>
              <label>Eメール</label>
              <input type="email" id="email" placeholder="メールアドレス"  onChange={(e) => setEmail(e.target.value) }/>
              <button id="submit" disabled={ processing || disabled || succeeded }>{ processing ? "送信中" : "購入する" }</button>
              { error && <div role="alert">{ error }</div> }
            </>
        )}
        </div>
        <ul className="links-area">
          <Link href="/"><a>利用規約</a></Link>
          <Link href="/"><a>特定商取引法に基づく表記</a></Link>
        </ul>
      </div>
    </form>
  );
};
export default CheckoutForm;