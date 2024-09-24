'use client';
import {
	styled,
	Grid,
	Paper,
	Typography,
	ButtonBase,
	useMediaQuery,
} from '@mui/material';

const Prayer = ({ prayer }) => {
	const isIphone13 = useMediaQuery('(max-width: 200px)');
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	});
	const paperStyle = {
		height: isIphone13 ? '80vh' : '100vh',
		width: isIphone13 ? '80vw' : '65vw',
		paddingTop: '1em',
		paddingLeft: '1em',
		marginLeft: '1em',
	};

	return (
		<Paper
			elevation={0}
			sx={paperStyle}
		>
			<Grid
				container
				spacing={1}
			>
				<Grid item>
					<ButtonBase sx={{ width: 150, height: 150 }}>
						<Img
							alt='complex'
							src={prayer.img}
						/>
					</ButtonBase>
				</Grid>
				<Grid
					item
					xs={12}
					sm
					container
				>
					<Grid
						item
						xs
						container
						direction='column'
						spacing={1}
					>
						<Grid
							item
							xs
						>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
							>
								{prayer.title}
							</Typography>
							<Typography
								gutterBottom
								variant='body2'
								component='div'
							>
								{prayer.subtitle}
							</Typography>
							<Typography
								variant='body2'
								gutterBottom
							>
								{prayer.content}
							</Typography>
						</Grid>
						<Grid
							item
							xs
						>
							<Typography
								sx={{ cursor: 'pointer' }}
								variant='body2'
							>
								{prayer.repeat}
							</Typography>
						</Grid>
						<Grid
							item
							xs
						>
							<Typography
								gutterBottom
								variant='body2'
							>
								{prayer.ending}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default Prayer;
