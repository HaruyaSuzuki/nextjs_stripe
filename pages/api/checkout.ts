// Next.js
import type { NextApiRequest, NextApiResponse } from "next";

// Thirdparty
import Stripe from 'stripe';

// Original
import siteInfo from "lib/site_info";

const stripe = new Stripe(siteInfo.stripe_secretKey, { apiVersion: "2020-08-27" });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.price,
    currency: "jpy",
    description: "サイト制作決済",
    metadata: {
      username: req.body.username,
      email: req.body.email,
    }
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
};