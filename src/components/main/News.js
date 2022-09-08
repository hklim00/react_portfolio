import React from 'react';

function News({ Scrolled, currentPos }) {
	const position = Scrolled - currentPos || 0;
	return (
		<section id='news' className='myScroll'>
			<h2 style={{ left: position * 0.5 }}>news</h2>
			<div className='inner'></div>
		</section>
	);
}

export default News;
