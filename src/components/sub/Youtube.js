import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import Pop from '../common/Pop';
import { useSelector } from 'react-redux';

function Youtube() {
	const pop = useRef(null);
	const [Index, setIndex] = useState(0);
	const Videos = useSelector((store) => store.youtubeReducer.youtube);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='wrap'>
					{Videos.map((vid, idx) => {
						return (
							<article key={vid.id}>
								<div className='inner'>
									<div
										className='pic'
										onClick={() => {
											pop.current.open();
											setIndex(idx);
										}}>
										<img src={vid.snippet.thumbnails.high.url} alt='' />
									</div>
									<div className='txt'>
										<h2>{vid.snippet.title.split(' ', 3)}</h2>
										<p>{vid.snippet.description.split(' ', 4)}</p>
										<FontAwesomeIcon
											icon={faArrowRightLong}
											onClick={() => {
												pop.current.open();
												setIndex(idx);
											}}
										/>
									</div>
								</div>
							</article>
						);
					})}
				</div>
			</Layout>
			<Pop ref={pop}>
				{Videos.iength !== 0 && (
					<iframe
						src={`https://www.youtube.com/embed/${Videos[Index].snippet.resourceId.videoId}`}
						frameBorder='0'
						title='Index'></iframe>
				)}
			</Pop>
		</>
	);
}

export default Youtube;
