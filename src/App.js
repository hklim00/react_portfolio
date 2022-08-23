import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setMembers, setFlickr } from './redux/action';
import axios from 'axios';

// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Content from './components/main/Content';
import Visual from './components/main/Visual';

// sub
import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Contact from './components/sub/Contact';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	const getMembers = async () => {
		const url = process.env.PUBLIC_URL + '/DB/members.json';
		await axios.get(url).then((json) => {
			dispatch(setMembers(json.data.members));
		});
	};

	const getYoutube = async () => {
		const key = 'AIzaSyBDL1S8asY8CR73ihG02orQB3BdWha5F1A';
		const playlistId = 'PL_RxE5V-zXWKQclKr_-CS9KkMp4xPkcrW';
		const num = 5;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};

	useEffect(() => {
		getMembers();
		getYoutube();
		dispatch({
			type: 'FLICKR_START',
			Opt: { type: 'user', user: '196144884' },
		});
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Content />
					<Visual />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/contact' component={Contact} />
			<Route path='/members' component={Members} />

			<Footer />
		</>
	);
}

export default App;
