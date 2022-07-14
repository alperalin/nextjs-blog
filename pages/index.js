import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout/Layout';
import Date from '../components/Date/Date';

import { getSortedPostsData } from '../lib/posts';

import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1x}`}>
				<h2 className={utilStyles.headingLg}>Blog Posts</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map((post) => (
						<li className={utilStyles.listItem} key={post.id}>
							<Link href={`/posts/${post.id}`}>
								<a>{post.title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={post.date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
