import React from 'react';
import Intro from './Intro';
import News from './News';
import Pics from './Pics';
import Visual from './Visual';
import { useState, useEffect, useRef } from 'react';

function Main() {
	const pos = useRef([]);
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);

	const getPos = () => {
		const secs = pos.current.querySelectorAll('.myScroll');
		for (const sec of secs) Pos.push(sec.offsetTop);
		setPos(Pos);
	};

	const activation = () => {
		const scroll = window.scrollY;
		setScrolled(scroll);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);

		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	return (
		<main ref={pos}>
			<Visual />
			<Intro Scrolled={Scrolled} currentPos={Pos[1]} />
			<Pics Scrolled={Scrolled} currentPos={Pos[2]} />
			<News Scrolled={Scrolled} currentPos={Pos[3]} />
		</main>
	);
}

export default Main;
