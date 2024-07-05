import { Grid } from "@mui/material";
import CardTech from "./CardTechs";
import react from "../assets/react.png"
import SQL from "../assets/SQL.png"
import node from "../assets/node.png"
import js from "../assets/js.png"
import laravel from "../assets/laravel.png"
import postgres from "../assets/postgres.png"
import mui from "../assets/mui.png"

export default function Tech() {


    const dataTech=[
        {
            image : react,
            text : "React"
        },
        {
            image : SQL,
            text : "SQL"
        },
        {
            image : node,
            text : "Node"
        },
        {
            image : js,
            text : "Javascript"
        },
        {
            image : postgres,
            text : "PostgresSQL"
        },
        {
            image : laravel,
            text : "Laravel"
        },
        {
            image : mui,
            text : "Material UI"
        },
       

    ]
    return (
        <Grid container xs={12} direction={'row'} spacing={5} sx={{marginTop:'10px', display:'flex', justifyContent:'space-evenly', textAlign:'center'}}>
            {dataTech.map((data)=>(
                <Grid item>
                <CardTech 
                image={data.image}
                text={data.text}
                />
            </Grid>
            ))}
        </Grid>
    )
}