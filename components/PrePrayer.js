'use client';
import { Paper, useMediaQuery } from '@mui/material';

const PrePrayer = ({ prePrayer }) => {
	const isIphone13 = useMediaQuery('(max-width: 400px)');

	const paperStyle = {
		height: isIphone13 ? '140vh' : '115vh',
		width: isIphone13 ? '100vw' : '60vw',
		paddingLeft: isIphone13 ? '1em' : '2em',
		marginLeft: isIphone13 ? '1em' : '1em',
		marginRight: isIphone13 ? '3em' : '1em',
	};

	const prayerTitle = {
		textAlign: 'center',
	};

	const prayerStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '5em',
		marginLeft: '2em',
		marginTop: '5px',
		width: '80%',
	};

	return (
		<Paper
			elevation={0}
			sx={paperStyle}
		>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h2
					style={{
						textAlign: 'center',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '5px',
					}}
				>
					{prePrayer.title}
				</h2>
				<h3 style={{ textAlign: 'center' }}>{prePrayer.trinity}</h3>
			</div>

			<p style={{ textAlign: 'center', fontWeight: 'bold' }}>
				{prePrayer.hailMary}
			</p>
			{/* 청원기도 */}
			<h3 style={prayerTitle}>{prePrayer.petitionPrayerTitle}</h3>
			<div style={prayerStyle}>
				<p style={{ textAlign: 'left' }}>{prePrayer.petitionPrayer}</p>
			</div>
			<h3 style={prayerStyle}>{prePrayer.repititionOne}</h3>
			{/* 감사기도 */}
			<h3 style={prayerTitle}>{prePrayer.thanksgivingPrayerTitle}</h3>
			<div style={prayerStyle}>
				<p style={{ textAlign: 'left' }}>{prePrayer.thanksgivingPrayer}</p>
			</div>
			<h3 style={prayerStyle}>{prePrayer.repititionTwo}</h3>
		</Paper>
	);
};

export default PrePrayer;
