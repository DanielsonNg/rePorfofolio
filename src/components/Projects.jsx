import { Grid } from "@mui/material";
import CardProjects from "./CardProjects";
import eska from "../assets/eska.png"
import interia from "../assets/Interia.png"
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion";

export default function Projects() {

    const projects = [
        {
            name: "e-SKA",
            description:
                "Web Application for managing documents related to export for Exporters.",
            tags: [
                {
                    name: "react",
                    color: "lightblue",
                },
                {
                    name: "postgressql",
                    color: "green-text-gradient",
                },
                {
                    name: "prime react",
                    color: "blue",
                },
                {
                    name: "node",
                    color: "green",
                },
            ],
            source_code_link: 'https://ska.kemendag.go.id/',
            image: eska,
        },
        {
            name: "interia",
            description:
                "Simple E-Commerce Web Application to buy and sell furniture products.",
            tags: [
                {
                    name: "php",
                    color: "blue",
                },
                {
                    name: "javascript",
                    color: "yellow",
                },
                {
                    name: "laravel",
                    color: "red",
                },
            ],
            image: interia,
            source_code_link: "https://github.com/DanielsonNg/Simple-E-Commerce",
        },
    ]
    return (
        <>
            <Grid container direction={'column'} sx={{ marginTop: '50px' }}>
                <motion.div variants={textVariant()}>
                    <Grid item>
                        <p style={{ fontSize: '32px', fontWeight: 'lighter' }}>My Past Developments</p>
                    </Grid>
                    <Grid item style={{ marginTop: '-30px' }}>
                        <h1 style={{fontSize:'64px'}}>Projects</h1>
                    </Grid>
                </motion.div>
                <Grid container direction={'row'} spacing={5}>
                    {projects.map((project, index) => (
                        <Grid item md={4} xs={12}>
                            <CardProjects
                                key={`project-${index}`}
                                index={index}
                                {...project}
                            />
                        </Grid>
                    ))}
                </Grid>


            </Grid>
        </>
    )
}