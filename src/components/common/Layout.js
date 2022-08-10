import React from 'react';

function Layout({ children }) {
	return (
		<section>
			<h1>TITLE</h1>
			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
