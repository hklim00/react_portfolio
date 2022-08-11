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
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
							soluta esse eaque maiores quam doloribus non temporibus cum ad
							illum.
						</p>
					</div>
					<div>
						<h2>CONTACT US</h2>
						<p>Lorem, ipsum dolor</p>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
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
			</div>
		</footer>
	);
}

export default Footer;
