import { Grid } from "@mui/material";

export default function About() {
    return (
        <>
        <Grid container direction={'column'} style={{position:'relative'}}>
            <Grid item>
                <p style={{ fontSize: '32px', fontWeight: 'lighter' }}>Introduction</p>
            </Grid>
            <Grid item style={{ marginTop: '-50px' }}>
                <h1 style={{fontSize:'64px'}}>Overview</h1>
            </Grid>
            <Grid item>
                <p style={{fontSize:'24px', fontWeight:'lighter'}}>
                    Beginner Developer Learning Technologies </p>
            </Grid>
            <Grid container direction={'row'}>
            <p style={{fontSize:'24px', fontWeight:'lighter'}}>
                Tech used: </p>
            </Grid>
        </Grid>
        </>
    )
}