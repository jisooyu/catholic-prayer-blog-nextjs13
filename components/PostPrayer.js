'use client'
import { Grid, Typography, Paper, useMediaQuery } from '@mui/material';

const PostPrayer = ({ postPrayer }) => {
    const isIphone13 = useMediaQuery('(max-width: 400px)');

    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isIphone13 ? '1em' : '3em',
        marginLeft: isIphone13 ? '1em' : '5em',
        height: isIphone13 ? '100vh' : '100vh',
        width: isIphone13 ? '80vw' : '50vw',
        paddingTop:  '1em' ,
        paddingLeft:'1em' ,
        paddingRight: '2em' ,
        overflow: 'scroll'
    };


    return (
        <Paper elevation={0} sx={paperStyle}>
            <Grid container spacing={0.5}>
                <Grid item xs={12} sm={3} textAlign="center" >
                    <Typography variant="h5" component="div">
                        {postPrayer.title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} textAlign="left" >
                    <Typography variant="subtitle1">
                        {postPrayer.content}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} textAlign="center" >
                    <Typography variant="h6">
                        {postPrayer.ending}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PostPrayer;
