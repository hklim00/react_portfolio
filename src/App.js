import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Content from './components/main/Content';
import Visual from './components/main/Visual';

import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Youtube from './components/sub/Youtube';

function App() {
	return (
		<>
			<Header />
			<Footer />

			<Content />
			<Visual />

			<Community />
			<Department />
			<Gallery />
			<Location />
			<Members />
			<Youtube />
		</>
	);
}

export default App;
