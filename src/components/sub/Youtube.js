import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pop from '../common/Pop';

function Youtube() {
	const [Videos, setVideos] = useState([]);
	const [Open, setOpen] = useState(false);

	useEffect(() => {
		const key = 'AIzaSyBDL1S8asY8CR73ihG02orQB3BdWha5F1A';
		const playlistId = 'PL_RxE5V-zXWLz8bPJ5xi6dsdqg2mnwgPr';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVideos(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				{Videos.map((vid) => {
					return (
						<article key={vid.id}>
							<div className='inner'>
								<div
									className='pic'
									onClick={() => {
										setOpen(true);
									}}>
									<img src={vid.snippet.thumbnails.high.url} alt='' />
								</div>
								<div className='txt'>
									<h2>{vid.snippet.title}</h2>
									<p>{vid.snippet.description}</p>
								</div>
							</div>
						</article>
					);
				})}
			</Layout>
			{Open && <Pop setOpen={setOpen}></Pop>}
		</>
	);
}

export default Youtube;
