// Next.js
import Head from "next/head";
import { NextPage } from "next";

// React
import { ReactNode } from "react";

// Original
import siteInfo from "lib/site_info";

interface PageInfo {
	children: ReactNode;
	description: string;
	author: string;
	url: string;
}

const Layout: NextPage<PageInfo> = ({
	children,
	description,
	author,
	url
}) => {
	return (
		<>
			<Head>
				<title>PaymentForm</title>
				<meta charSet="UTF-8" />
				<meta name="description" content={ description } />
				<meta name="author" content={ author } />
				<link rel="canonical" href={ url } />
				{/* Make URL => none */}
				{/* Crawler => none */}
				{/* OGP & Twitter Card => none */}
				{/* Icon */}
				{/*		Site icon */}
				<link rel="icon" href={ siteInfo.icon } sizes="250x250" type="image/jpg" />
				{/*		Mobile icon */}
				<link rel="apple-touch-icon-precomposed" href={ siteInfo.icon } />
				{/* IE */}
				<meta httpEquiv="X-UA-Compatible" content="IE-edge" />
				{/* IE8~10 icon */}
				<link rel="shortcut icon" href={ siteInfo.icon } type="image/x-icon" />
				{/*	Chrome, Firefox OS and Opera */}
				{/*		Theme Color */}
				<meta name="theme-color" content={ siteInfo.themeColor } />
				{/* iOS Safari */}
				{/*		iOS Safari Stand Alone mode */}
				<meta name="apple-mobile-web-app-capable" content="yes" />
				{/*		iOS Safari Theme Color */}
				<meta name="apple-mobile-web-app-status-bar-style" content={ siteInfo.themeColor } />
				{/*	Windows */}
				{/*		Windows tile image */}
				<meta name="msapplication-TileImage" content={ siteInfo.icon } />
				{/*		Windows tile color */}
				<meta name="msapplication-TileColor" content={ siteInfo.themeColor } />
				{/* 	Windows Phone Theme Color */}
				<meta name="msapplication-navbutton-color" content={ siteInfo.themeColor } />
				{/* Google Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Caveat&family=Josefin+Sans:wght@500&family=Montserrat:wght@200&family=Permanent+Marker&family=Poiret+One&family=Righteous&display=swap" rel="stylesheet" />
				{/* Font Awesome CDN */}
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
			</Head>
			{ children }
		</>
	);
}

export default Layout;