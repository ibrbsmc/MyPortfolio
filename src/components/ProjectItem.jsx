import React from 'react'
import Card from 'react-bootstrap/Card';
import '../css/ProjectItem.css'
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
const ProjectItem = ({image,title,description,linkweb,linkgit}) => {
  return (
        <Card className='project-item'>
            <Card.Img src={image}></Card.Img>
            <Card.Body className='project-item-body'>
                <Card.Title className='project-item-title'>{title}</Card.Title>
                <Card.Text className='project-item-desc'>{description}</Card.Text>
          <div className='icon-container'>
          <Card.Link href={linkweb} target="_blank"><div className='pr-item-icon'><PublicIcon />Live</div></Card.Link>
          <Card.Link href={linkgit} target="_blank"><div className='pr-item-icon'><GitHubIcon />GitHub</div></Card.Link>
          </div>
            </Card.Body>
        </Card>
  )
}

export default ProjectItem