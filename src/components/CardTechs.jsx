import { Card, CardContent, Grid,Typography } from "@mui/material";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion'
import { fadeIn, textVariant} from '../utils/motion'

export default function CardTech(props) {
    return (
        <Tilt>
            <motion.div
            variants={fadeIn("right","spring", 0.5 * props.index, 0.75)}
            >
                <Card sx={{
                    minWidth: '200px', minHeight: '150px',
                    border: 'double 0.5px transparent',
                    borderRadius: '10px',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'content-box, border-box',
                    backgroundImage: "linear-gradient(#15505c, #242424), linear-gradient( #76c0cf , #15505c, #1e788a)",

                }}>

                    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={props.image} style={{objectFit:'contain'}} width={'150px'} height={'150px'} loading="lazy">
                        </img>
                    </Grid>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: 'whitesmoke' }}>
                            {props.text}
                        </Typography>
                    </CardContent>

                </Card>
            </motion.div>
        </Tilt>
    )
}