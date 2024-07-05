import { useState } from 'react'
import './App.css'
import { Grid, Typography, createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import StarsCanvas from './components/StarCanvas'
import Works from './components/Works'
import Projects from './components/Projects'
import zIndex from '@mui/material/styles/zIndex'


function App() {
  const theme = createTheme({
    // typography: {
    //   fontFamily: [
    //     'Train One', 'cursive'
    //   ].join(',')
    // }
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container style={{ position: 'absolute', width: '100%', height: '100%', marginTop:'650px', zIndex:'-1' }}>
          <StarsCanvas />
        </Grid>
        <Grid container style={{ position: 'absolute', width: '100%', height: '100%', marginTop:'1350px',zIndex:'-1' }}>
          <StarsCanvas />
        </Grid>
        <Grid container style={{ position: 'absolute', width: '100%', height: '100%', marginTop:'2000px',zIndex:'-1' }}>
          <StarsCanvas />
        </Grid>
        <Grid container direction="column">
          {/* <Grid container xs={12} md={12} direction={'row'} style={{ marginTop: '-30px' }}>
            <Grid item xs={12} md={6}>
              <h2>Portofolio</h2>
            </Grid>
          </Grid> */}
          <Hero />
          <About />
          <Tech />
          <Works />
          <Projects />
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default App
