import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebookF,
	faTwitter,
	faBehance,
} from '@fortawesome/free-brands-svg-icons';

function Header({ type }) {
	return (
		<header className={type}>
			<h1>
				<Link to='/'>archTec</Link>
			</h1>
			<nav id='gnb'>
				<ul>
					<li>
						<NavLink to='/department'>DEPARTMENT</NavLink>
					</li>
					<li>
						<NavLink to='/community'>COMMUNITY</NavLink>
					</li>
					<li>
						<NavLink to='/gallery'>GALLERY</NavLink>
					</li>
					<li>
						<NavLink to='/youtube'>YOUTUBE</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>CONTACT</NavLink>
					</li>
					<li>
						<NavLink to='/members'>MEMBERS</NavLink>
					</li>
				</ul>
			</nav>
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
		</header>
	);
}

export default Header;
