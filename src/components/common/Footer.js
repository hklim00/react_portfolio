import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebookF,
	faTwitter,
	faBehance,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='con'>
					<div>
						<h1>archTec</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit Aperiam
							quod cupiditate eum, iure facere tenetur omnis rerum quaerat
							Necessitatibus aspernatur dolorem laudantium repudiandae
						</p>
					</div>
					<div>
						<h2>CONTACT US</h2>
						<p>Lorem, ipsum dolor</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur
							<br /> adipisicing elit
						</p>
						<p>Lorem, ipsum dolor</p>
					</div>
					<div>
						<h2>FOLLOW US</h2>
						<p>Lorem, ipsum dolor</p>
						<ul className='sns'>
							<li>
								<FontAwesomeIcon icon={faInstagram} />
							</li>
							<li>
								<FontAwesomeIcon icon={faTwitter} />
							</li>
							<li>
								<FontAwesomeIcon icon={faBehance} />
							</li>
							<li>
								<FontAwesomeIcon icon={faFacebookF} />
							</li>
						</ul>
					</div>
				</div>
				<p className='copy'>&copy; 2022 archTec. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
