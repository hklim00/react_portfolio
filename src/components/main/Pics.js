import { useSelector } from 'react-redux';

function Pics({ Scrolled, currentPos }) {
	const Pics = useSelector((store) => store.flickrReducer.flickr);
	const position = Scrolled - currentPos || 0;

	return (
		<section id='pics' className='myScroll'>
			<h2 style={{ left: position * 3 }}>gallery</h2>
			<div className='inner'>
				<ul>
					{Pics.map((pic, idx) => {
						if (idx >= 4) return;
						return (
							<li key={pic.id}>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_c.jpg`}
										alt={pic.title}
									/>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Pics;
