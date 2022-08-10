import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Department() {
	const [Members, setMembers] = useState([]);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='inner'>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt='' />
							</div>
							<div className='txt'>
								<h2>{member.name}</h2>
								<p>{member.position}</p>
							</div>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}

export default Department;
