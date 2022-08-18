import Layout from '../common/Layout';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhone,
	faEnvelope,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function Contact() {
	const { kakao } = window;
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	const markerPosition = option.center;

	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	useEffect(() => {
		const map = new kakao.maps.Map(container.current, option);
		marker.setMap(map);
	}, []);

	return (
		<Layout name={'Contact'}>
			<div className='wrap'>
				<div className='map'>
					<div id='map' ref={container}></div>
				</div>

				<div className='box'>
					<dl>
						<dt>
							<FontAwesomeIcon icon={faPhone} />
							PHONE
						</dt>
						<dd>+0 124 564 33-22</dd>
						<dd>+0 124 564 33-22</dd>
						<dd>+0 124 564 33-22</dd>
					</dl>
					<dl>
						<dt>
							<FontAwesomeIcon icon={faEnvelope} />
							EMAIL
						</dt>
						<dd>archtech@email.com</dd>
					</dl>
					<dl>
						<dt>
							<FontAwesomeIcon icon={faLocationDot} />
							ADDRESS
						</dt>
						<dd>
							KOREA SEOUL.
							<br />
							453 Gangnam street BD 33
						</dd>
					</dl>
				</div>
			</div>
		</Layout>
	);
}

export default Contact;
