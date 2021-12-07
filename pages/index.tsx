// Next.js
import type { NextPage } from "next"
import Link from "next/link";

// Original
import Layout from "components/layout";
import siteInfo from "lib/site_info";

const Index: NextPage = () => {
	return (
		<Layout description={ siteInfo.description } author={ siteInfo.author } url= { siteInfo.url }>
			<div className="container">
				<Link href="/checkout"><a>Checkout Page</a></Link>
			</div>
		</Layout>
	)
}

export default Index
