import React from 'react'
import '../css/LpInfo.css'
import Card from 'react-bootstrap/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
const LpInfo = () => {
  return (
            <Card className='lp-info'>
                <Card.Body className="lp-title">
                    <Card.Title className='lp-info-section'>
                        <p className='info-title'>
                            <span>
                            Ibrahim Basmacı
                            </span>
                        </p>
                    <Card.Link className='down-cv' href='/cvdoc.pdf' target='_blank'>
                    <DownloadForOfflineIcon />
                    <span>Download CV</span>
                    </Card.Link>
                    </Card.Title>
                    <Card.Subtitle className='info-st'>Software Engineer x Web Developer</Card.Subtitle>
                <Card.Text className="lp-desc">
                    Hi! I enjoy developing projects and exploring technology. I continuously improve myself in web <br /> design and front-end development. 
                    I put my knowledge into practice through my projects. <br />
                    I value both theoretical and practical knowledge.I always strive to improve myself. <br />
                    My goal is to build a strong presence in the software world. 
                </Card.Text>
                <div className='icons'>
                    <Card.Link className='lin-icon' href="https://www.linkedin.com/in/ibrahimbasmaci/" target="_blank"><LinkedInIcon /></Card.Link>
                    <Card.Link className='git-icon' href="https://github.com/ibrbsmc" target="_blank"><GitHubIcon /></Card.Link>
                    <Card.Link className='mail-icon' href="https://mail.google.com/mail/?view=cm&to=ibrbsmc@gmail.com"  target="_blank"><MailIcon /></Card.Link>
                    
                </div>
                    </Card.Body>
            </Card>
  )
}

export default LpInfo
