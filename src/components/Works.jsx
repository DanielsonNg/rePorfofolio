import { Grid } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import prosia from "../assets/Logo-PROSIA-CTC.png"
import 'react-vertical-timeline-component/style.min.css';

function ExperienceCard({ experience }) {
    return (
        <VerticalTimelineElement
            animate={false}
            visible={true}
            contentStyle={{ background: "#0d333b", color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        style={{ width: '60%', height: '60%', objectFit: 'contain' }}
                    />
                </div>
            }
        >
            <div>
                <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>{experience.title}</h3>
                <p style={{ color: '#b2b2b2', fontSize: '16px', fontWeight: '600', margin: 0 }}>{experience.company_name}</p>
            </div>

            <ul style={{ marginTop: '1.25rem', listStyleType: 'disc', marginLeft: '1.25rem', paddingLeft: '1rem', lineHeight: '1.5' }}>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        style={{ color: '#ffffffb3', fontSize: '14px', paddingLeft: '0.25rem', letterSpacing: '0.05em' }}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}

export default function Works() {

    const experience = [
        {
            title: "Full stack Developer",
            company_name: "PROSIA (PT Pro Sistimatika Automasi)",
            icon: prosia,
            iconBg: "#E6DEDD",
            date: "Feb 2023 - Feb 2024",
            points: [
                "Developing and maintaining web applications using React.js, Node js, and PostgresSQL with related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, devOps Engineer, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participate in resolving conflict on Version Control System with devOps Engineer.",
            ],
        },
    ]

    return (
        <Grid container direction={'column'} sx={{marginTop:'50px'}}>
            <Grid item>
                <p style={{ fontSize: '32px', fontWeight: 'lighter' }}>What i have done in the past</p>
            </Grid>
            <Grid item style={{ marginTop: '-50px' }}>
                <h1 style={{fontSize:'64px'}}>Experiences</h1>
            </Grid>
            <Grid item>
                <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column' }}>
                    <VerticalTimeline>
                        {experience.map((experience, index) => (
                            <ExperienceCard
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </VerticalTimeline>
                </div>
            </Grid>

        </Grid>
    )
}