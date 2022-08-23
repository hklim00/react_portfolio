import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
import { useSelector, useDispatch } from 'react-redux';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const btns = useRef(null);
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);

	const Pics = useSelector((store) => store.flickrReducer.flickr);

	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '.5s' };

	const user = '196144884@N05';
	// const [Opt, setOpt] = useState({ type: 'user', user: user })

	const showInterest = (e) => {
		const btnTop = btns.current.querySelectorAll('button');
		btnTop.forEach((btn) => {
			btn.classList.remove('on');
		});
		e.target.classList.add('on');

		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');

		setEnableClick(false);
	};

	const showUser = (e) => {
		const btnTop = btns.current.querySelectorAll('button');
		btnTop.forEach((btn) => {
			btn.classList.remove('on');
		});
		e.target.classList.add('on');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');

		setEnableClick(false);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');

		setEnableClick(false);
		input.current.value = '';
	};

	useEffect(() => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	}, []);

	return (
		<Layout name={'Gallery'}>
			<div className='gallery_top' ref={btns}>
				<button user={user} onClick={showUser} className='on'>
					ARCHITECTURE
				</button>
				<button onClick={showInterest}>INTEREST</button>
				<div className='searchBox'>
					<input
						type='text'
						ref={input}
						onKeyUp={(e) => {
							if (e.key === 'Enter') showSearch();
						}}
					/>
					<button onClick={showSearch}>SEARCH</button>
				</div>
			</div>
			{Loading && (
				<img
					className='loading'
					src={process.env.PUBLIC_URL + '/img/loading.gif'}
					alt=''
				/>
			)}
			<div className='frame' ref={frame}>
				<Masonry elementType={'div'} options={masonryOptions}>
					{Pics.map((pic, idx) => {
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
											alt={pic.title}
										/>
									</div>
									{/* <h2>{pic.title}</h2> */}
								</div>
							</article>
						);
					})}
				</Masonry>
			</div>
		</Layout>
	);
}

export default Gallery;
