// Next.js
import { NextPage } from 'next';
import Image from 'next/image';

// React
import React from 'react';

// Thirdparty
import { Elements as StripeElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Original
import Layout from 'components/layout';
import siteInfo from 'lib/site_info';
import CheckoutForm from 'components/checkoutForm';

const promise = loadStripe(siteInfo.stripe_apiKey);

const Checkout: NextPage = () => {
	const product = "スタンダードプラン";
	const description = "製品またはブランドの販売促進を行うLPの制作も可能です。※購入ページの作成は行なっていません。";
	const price = 300000;
	return (
		<Layout description={ siteInfo.description } author={ siteInfo.author } url= { `${ siteInfo.url }/checkout`}>
		<div id="checkout">
			<div className="container checkout_inner">
				<div className="card_wrapper">
					<div className="card_wrapper__left">
						<div className="card_wrapper__left__inner">
							<div className="card_wrapper__left__inner__top">
								<h1 className="product">{ product }</h1>
								<p className="description">{ description }</p>
							</div>
							<h2 className="price">&yen;{ price }</h2>
							<ul className="notice">
								<li>サイト完成後、毎月2980円のお支払いが発生します。</li>
								<li>デザイン作成以降はキャンセル料としてお支払い金額の50%をいただきます。</li>
							</ul>
						</div>
						<Image src="/bg-img.jpg" alt="background image" layout="fill" objectFit="cover" />
					</div>
					<div className="card_wrapper__right">
						<StripeElements stripe={ promise }>
							<CheckoutForm price={ price } />
						</StripeElements>
					</div>
				</div>
			</div>
			<div className="bg-img">
				<Image src="/bg-img.jpg" alt="background image" layout="fill" objectFit="cover" />
			</div>
		</div>
		</Layout>
	)
};

export default Checkout;