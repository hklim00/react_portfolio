import Layout from '../common/Layout';
import { useSelector } from 'react-redux';

function Department() {
	const path = process.env.PUBLIC_URL;
	const Members = useSelector((store) => store.memberReducer.members);

	return (
		<Layout name={'Department'}>
			<section className='con'>
				<article>
					<div className='pic'>
						<img src={`${path}/img/member1.jpg`} alt='' />
					</div>
					<div className='box'>
						<div className='text'>
							<h2>Creative Directors</h2>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
								cum ut asperiores veniam ipsam possimus.
							</p>
							<b>Lorem, ipsum dolor.</b>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
							<b>Lorem, ipsum dolor.</b>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
					</div>
				</article>
			</section>
			<section className='wrap'>
				<div className='inner'>
					<div className='l_box'>
						<div className='text'>
							<span>Lorem, ipsum consectetur</span>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Exercitationem quo, distinctio neque at qui assumenda facilis
								voluptatum explicabo possimus delectus sequi quod veritatis.
							</p>
							<span>Loremsd of desc</span>
						</div>
					</div>
					<div className='list'>
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
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Department;
