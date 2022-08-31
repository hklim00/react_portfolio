import React from 'react';
import Content from './Content';
import Intro from './Intro';
import News from './News';
import Pics from './Pics';
import Visual from './Visual';

function Main() {
	return (
		<main>
			<Visual />
			<Intro />
			<Pics />
			<News />
		</main>
	);
}

export default Main;
