import React from 'react'
import '../css/LpProjects.css'
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { ProjectList } from '../helper/ProjectList';
import ProjectItem from '../components/ProjectItem';
import { Link } from 'react-router-dom'; // 👈 Link import edildi


const LpProjects = () => {
  return (
    <Card className='lp-projects'>
        <Card.Body className='lpp-main-body'>
                <Card.Title className='lp-skills-title'>Featured Projects</Card.Title>
                <Button className='lm-skills' as={Link} to="/projects">View All Projects</Button>
        </Card.Body>
        <div className='lp-projects-div'>
      {ProjectList.slice(0, 5).map((project, index) => {
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
    </Card>
  )
}

export default LpProjects