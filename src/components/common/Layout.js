import { useEffect, useRef } from 'react';

function Layout({ children, name }) {
	const frame = useRef(null);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${name}`} ref={frame}>
			<figure>
				<img src={`${path}/img/${name}.jpg`} alt='' />
				<h1>{name}</h1>
			</figure>
			<div className='inner'>{children}</div>
		</section>
	);
}

export default Layout;
