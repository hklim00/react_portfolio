import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

// common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// main
import Main from './components/main/Main';

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

	useEffect(() => {
		dispatch({ type: 'types.MEMBERS.start' });
		dispatch({ type: 'types.YOUTUBE.start' });
		dispatch({
			type: 'types.FLICKR.start',
			Opt: { type: 'user', user: '196144884@N05' },
		});
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Main />
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
