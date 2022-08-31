import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);
	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
		};
	});

	const closeMenu = () => {
		setOpen(false);
	};

	useEffect(() => {
		Open
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	}, [Open]);

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='mGnb'
					initial={{
						opacity: 0,
						transform: 'scaleX(0)',
						transformOrigin: '0 0',
					}}
					animate={{
						opacity: 1,
						transform: 'scaleX(1)',
						transition: { duration: 0.5 },
					}}
					exit={{
						opacity: 0,
						transform: 'scaleX(0)',
						transition: { duration: 0.5 },
					}}>
					<ul>
						<li>
							<NavLink to='/about' onClick={closeMenu}>
								ABOUT
							</NavLink>
						</li>
						<li>
							<NavLink to='/community' onClick={closeMenu}>
								COMMUNITY
							</NavLink>
						</li>
						<li>
							<NavLink to='/gallery' onClick={closeMenu}>
								GALLERY
							</NavLink>
						</li>
						<li>
							<NavLink to='/youtube' onClick={closeMenu}>
								YOUTUBE
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact' onClick={closeMenu}>
								CONTACT
							</NavLink>
						</li>
						<li>
							<NavLink to='/join' onClick={closeMenu}>
								JOIN
							</NavLink>
						</li>
					</ul>
					<FontAwesomeIcon
						className='menuClose'
						icon={faXmark}
						onClick={closeMenu}
					/>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
