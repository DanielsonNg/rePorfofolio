import { Grid } from "@mui/material";
import ModelCanvas from "./ModelCanvas";
import q from "../assets/q.jpg"

export default function Hero(){
    return(
        <Grid container xs={12} md={12} direction={'row'}
            style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', 
            }}>
            <Grid item xs={12} md={6} style={{textAlign:'center'}}>
              <h1>Hi, i am Danielson</h1>
              <h2>Fullstack Web Developer</h2>
            </Grid>
            {/* Insert 3d Here */}
            <Grid item xs={12} md={6} sx={{height:'600px'}}>
                <ModelCanvas />
            </Grid>
        </Grid>
    )
}