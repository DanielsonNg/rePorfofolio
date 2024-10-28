import { Grid } from "@mui/material";
import CardProjects from "./CardProjects";
import eska from "../assets/eska.png"
import interia from "../assets/Interia.png"
import donasi from "../assets/donasi.png"
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import inddit from "../assets/Inddit.png"

export default function Projects() {

    const projects = [
        {
            name: "e-SKA",
            description:
                "Web Application for managing documents related to export for Exporters.",
            tags: [
                {
                    name: "React",
                    color: "lightblue",
                },
                {
                    name: "Postgressql",
                    color: "green-text-gradient",
                },
                {
                    name: "Prime React",
                    color: "blue",
                },
                {
                    name: "Node",
                    color: "green",
                },
            ],
            source_code_link: 'https://ska.kemendag.go.id/',
            image: eska,
        },
        {
            name: "Interia",
            description:
                "Simple E-Commerce Web Application to buy and sell furniture products.",
            tags: [
                {
                    name: "Php",
                    color: "blue",
                },
                {
                    name: "Javascript",
                    color: "yellow",
                },
                {
                    name: "Laravel",
                    color: "red",
                },
            ],
            image: interia,
            source_code_link: "https://github.com/DanielsonNg/Simple-E-Commerce",
        },
        {
            name: "HopefulHarbor",
            description:
                "Donation Web-Application for Item Donation, Crowdfunding, and Learning.",
            tags: [
                {
                    name: "React",
                    color: "lightblue",
                },
                {
                    name: "Laravel",
                    color: "red",
                },
            ],
            image: donasi,
            source_code_link: "https://github.com/sije7/skripsi",
        },
        {
            name: "Inddit",
            description:
                "Community Social Media Website.",
            tags: [
                {
                    name: "MERN",
                    color: "green",
                },
                {
                    name: "Cloudinary",
                    color: "lightblue",
                },
            ],
            image: inddit,
            source_code_link: "https://github.com/DanielsonNg/Inddit",
        },
    ]
    return (
        <>
            <Grid container direction={'column'} sx={{ marginTop: '50px' }}>
                <motion.div variants={textVariant()}>
                    <Grid item>
                        <p style={{ fontSize: '32px', fontWeight: 'lighter' }}>My Past Developments</p>
                    </Grid>
                    <Grid container direction={"row"} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Grid item style={{ marginTop: '-30px' }}>
                            <h1 style={{ fontSize: '64px' }}>Projects</h1>
                        </Grid>
                        <Grid item style={{ marginTop: '-30px' }} onClick={() => window.open("https://github.com/DanielsonNg", '_blank').focus()}>
                            <h1 style={{ fontSize: '24px', fontWeight: 'lighter', alignItems: 'flex-end', cursor:'pointer' }}>Check Out my Github Profile</h1>
                        </Grid>
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