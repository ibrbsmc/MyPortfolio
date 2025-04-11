import React from 'react'
import Card from 'react-bootstrap/Card';
import { ProjectList } from '../helper/ProjectList';
import ProjectItem from '../components/ProjectItem';
import '../css/Projects.css'
import Container from 'react-bootstrap/esm/Container.js';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}


    >
    <Container className='lp-container'>
    <Card className='projects-main-card'>
      <Card.Body className='projects-body'>
            <Card.Title className='projects-title'>My Projects</Card.Title>
            <div className='title-underline'></div>
                    <div className='map-projects-div'>
      {ProjectList.map((project, index) => {
      return (
      
      <ProjectItem
      key={index}
      image={project.image}
      title={project.title}
      description={project.description}
      linkweb={project.linkweb}
      linkgit={project.linkgit}
      />
      );
      })}
      </div>
      </Card.Body>
    </Card>
    </Container>
    </motion.div>
  )
}

export default Projects