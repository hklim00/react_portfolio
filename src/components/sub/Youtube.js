import Layout from '../common/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pop from '../common/Pop';

function Youtube() {
	const [Videos, setVideos] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyBDL1S8asY8CR73ihG02orQB3BdWha5F1A';
		const playlistId = 'PL_RxE5V-zXWKQclKr_-CS9KkMp4xPkcrW';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVideos(json.data.items);
		});
	}, []);

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
											onClick={() => setOpen(true)}
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
