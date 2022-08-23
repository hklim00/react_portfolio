import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pop from '../common/Pop';
import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from '../../redux/action';

function Youtube() {
	const dispatch = useDispatch();
	const [Open, setOpen] = useState(false);
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
											setOpen(true);
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
												setOpen(true);
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
			{Open && (
				<Pop setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Videos[Index].snippet.resourceId.videoId}`}
						frameBorder='0'
						title='Index'></iframe>
				</Pop>
			)}
		</>
	);
}

export default Youtube;
