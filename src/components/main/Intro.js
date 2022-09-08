import React from 'react';

function Intro({ Scrolled, currentPos }) {
	const position = Scrolled - currentPos || 0;
	return (
		<section id='intro' className='myScroll'>
			<h2 style={{ left: position * 0.5 }}>about</h2>
			<div className='inner'></div>
		</section>
	);
}

export default Intro;
