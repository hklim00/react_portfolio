import React from 'react';

function Layout({ children, name }) {
	const path = process.env.PUBLIC_URL;

	return (
		<section className={`content ${name}`}>
			<figure>
				<img src={`${path}/img/${name}.jpg`} alt='' />
				<h1>{name}</h1>
			</figure>
			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
