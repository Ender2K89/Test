import Layout from '@theme/Layout';
import React from 'react';

export default function Home() {
	return (
		<Layout
			title={`Home`}
			description="Description will go into a meta tag in <head />">
			<header>
				<h1 className="text-rose-700 dark:text-rose-600 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center">
					Korino Development
				</h1>

				<p className="text-neutral-900 dark:text-neutral-100 text-base md:text-lg lg:text-xl font-semibold row">
					We are a group of dedicated and hard-working team members.
				</p>
			</header>
		</Layout>
	);
}
