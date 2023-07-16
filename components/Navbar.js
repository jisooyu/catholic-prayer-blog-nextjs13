'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
	AppBar,
	Toolbar,
	Typography,
	Link,
	Menu,
	MenuItem,
	useMediaQuery,
} from '@mui/material';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';

const Navbar = () => {
	const router = useRouter();
	const isIphone13 = useMediaQuery('(max-width: 400px)');
	const typoStyle = {
		color: 'white',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			cursor: 'pointer',
		},
		marginLeft: isIphone13 ? '2px' : '8px',
		fontSize: '14px',
	};

	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		document.body.classList.add('menu-open');
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		document.body.classList.remove('menu-open');
		setAnchorEl(null);
	};

	const handleMenuItemClick = (route) => {
		handleMenuClose();
		// navigate(route);
		router.push(route);
	};
	const toolbarStyle = {
		display: 'flex',
		flexDirection: isIphone13 ? 'column' : 'row',
		alignItems: 'left',
		justifyContent: 'space-evenly',
	};
	return (
		<div style={{ height: 'auto' }}>
			<AppBar position='sticky'>
				<Toolbar sx={toolbarStyle}>
					<Typography>
						<SlowMotionVideoIcon sx={{ color: 'white' }} />
						<Link
							href='/'
							sx={typoStyle}
						>
							주님의 기도
						</Link>
					</Typography>
					<Typography>
						<Link
							href='/prague'
							sx={typoStyle}
						>
							프라그 아기예수님기도
						</Link>
					</Typography>
					<Typography>
						<Link
							href='/fatima'
							sx={typoStyle}
						>
							파티마 성모님발현
						</Link>
					</Typography>
					<Typography>
						<Link
							href='/faust'
							sx={typoStyle}
						>
							하느님 자비의 기도
						</Link>
					</Typography>

					{/* problem occurs here. 왜 MenuItem을 선택하면 header의 color가 바뀔까? */}
					<Typography
						sx={typoStyle}
						onClick={handleMenuOpen}
					>
						묵주기도
					</Typography>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={() => handleMenuItemClick('/joyful')}>
							Joyful Mysteries
						</MenuItem>
						<MenuItem onClick={() => handleMenuItemClick('/luminous')}>
							Luminous Mysteries
						</MenuItem>
						<MenuItem onClick={() => handleMenuItemClick('/sorrowful')}>
							Sorrowful Mysteries
						</MenuItem>
						<MenuItem onClick={() => handleMenuItemClick('/glorious')}>
							Glorious Mysteries
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default Navbar;
