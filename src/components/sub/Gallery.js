import Layout from '../common/Layout';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';
import { useSelector, useDispatch } from 'react-redux';
import Pop from '../common/Pop';

function Gallery() {
	const dispatch = useDispatch();
	const frame = useRef(null);
	const input = useRef(null);
	const btns = useRef(null);
	const pop = useRef(null);

	const Pics = useSelector((store) => store.flickrReducer.flickr);

	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '.5s' };

	const user = '196144884@N05';

	const [Opt, setOpt] = useState({ type: 'user', user: user });

	const showInterest = (e) => {
		const btnTop = btns.current.querySelectorAll('button');
		btnTop.forEach((btn) => {
			btn.classList.remove('on');
		});
		e.target.classList.add('on');

		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'interest' });
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
		setOpt({ type: 'user', user: e.target.getAttribute('user') });
		setEnableClick(false);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		setOpt({ type: 'search', tag: result });
		setEnableClick(false);
		input.current.value = '';
	};

	const endLoading = () => {
		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setTimeout(() => {
				setEnableClick(true);
			}, 600);
		}, 1000);
	};

	useEffect(() => {
		dispatch({ type: 'types.FLICKR.start', Opt });
	}, [Opt]);

	useEffect(() => {
		endLoading();
	}, [Pics]);

	return (
		<>
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
										<div
											className='pic'
											onClick={() => {
												setIndex(idx);
												pop.current.open();
											}}>
											<img
												src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
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
			<Pop ref={pop}>
				{Pics.length !== 0 && (
					<img
						src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_h.jpg`}
						alt={Pics[Index].title}
					/>
				)}
			</Pop>
		</>
	);
}

export default Gallery;
