import { Link, NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebookF,
	faTwitter,
	faBehance,
} from '@fortawesome/free-brands-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function Header({ type }) {
	const menu = useRef(null);

	return (
		<header className={type}>
			<h1>
				<Link to='/'>archTec</Link>
			</h1>
			<nav id='gnb'>
				<ul>
					<li>
						<NavLink to='/about' activeClassName='on'>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeClassName='on'>
							COMMUNITY
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeClassName='on'>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeClassName='on'>
							YOUTUBE
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' activeClassName='on'>
							CONTACT
						</NavLink>
					</li>
					<li>
						<NavLink to='/join' activeClassName='on'>
							JOIN
						</NavLink>
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
			<FontAwesomeIcon
				className='menuBtn'
				icon={faBarsStaggered}
				onClick={() => menu.current.open()}
			/>
			<Menu ref={menu} />
		</header>
	);
}

export default Header;
