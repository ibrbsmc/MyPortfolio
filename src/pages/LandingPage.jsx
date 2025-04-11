import React from 'react'
import '../css/LandingPage.css'
import { Container } from '@mui/material'
import LpInfo from './LpInfo'
import LpSkills from './LpSkills'
import LpProjects from './LpProjects'
import LpBlog from './LpBlog'
import LpContact from './LpContact'
import { motion } from 'framer-motion';



const LandingPage = () => {
  return (
    <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}


    >
    <Container>
        <div className='lp-container'>
            <div className='lp-info'><LpInfo /></div>
            <div className='lp-skills'><LpSkills /></div>     
            <div className='lp-projects'><LpProjects /></div> 
            <div className="lp-blog"><LpBlog /></div>
            <div className="lp-contact"><LpContact /></div>
        </div>
    </Container>
    </motion.div>
  )
}

export default LandingPage