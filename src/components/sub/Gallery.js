import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const pop = useRef(null);
	const btns = useRef(null);
	const [Items, setItems] = useState([]);
	const [Index, setIndex] = useState(0);

	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(false);
	const masonryOptions = { transitionDuration: '.5s' };

	const num = 50;
	const user = '196144884@N05';

	const getFlickr = async (opt) => {
		const key = '700ca468bc8ad00386eefdfab82845a1';
		const method_user = 'flickr.people.getPhotos';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';

		let url = '';

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}

		if (opt.type === 'user') {
			url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&user_id=${opt.user}`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tag}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0)
				return alert('해당 검색어의 결과값이 없습니다.');

			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);
			setEnableClick(true);
		}, 1000);
	};

	const showInterest = (e) => {
		const btnTop = btns.current.querySelectorAll('button');
		btnTop.forEach((btn) => {
			btn.classList.remove('on');
		});
		e.target.classList.add('on');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'interest' });
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
		getFlickr({ type: 'user', user: e.target.getAttribute('user') });
		setEnableClick(false);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요');
		if (!EnableClick) return;
		setLoading(true);
		frame.current.classList.remove('on');
		getFlickr({ type: 'search', tag: result });
		setEnableClick(false);
		input.current.value = '';
	};

	useEffect(() => {
		getFlickr({ type: 'user', user: user });
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
					{Items.map((pic, idx) => {
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
