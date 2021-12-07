interface siteInfoType {
	stripe_apiKey: string;
	stripe_secretKey: string;
	url: string;
	author: string;
	description: string;
	icon: string;
	image: string;
	themeColor: string;
}

const siteInfo: siteInfoType = {
	stripe_apiKey: process.env.NEXT_PUBLIC_STRIPE_API_KEY || "",
	stripe_secretKey: process.env.STRIPE_SECRET_API_KEY || "",
	url: "http://localhost:3000",
	author: "demo",
	description: "Testing a payment form with Stripe and Next.js",
	icon: "/bg-img.jpg",
	image: "/bg-img.jpg",
	themeColor: "#000000"
}

export default siteInfo;