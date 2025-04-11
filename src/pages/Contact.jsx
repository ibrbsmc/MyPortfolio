import React from 'react'
import '../css/Contact.css'
import Card from 'react-bootstrap/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import BookIcon from '@mui/icons-material/Book';
import Container from 'react-bootstrap/esm/Container.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}


    >
    <Container className='lp-container'>
    <Card className='contact-card'>
      <Card className='cont-one'>
        <Card.Body>
        <Card.Text>Get in Touch</Card.Text>
                    <div className='title-underline'></div>

</Card.Body>        
      </Card>
      <Card className='cont-two'>
      <Card className='cont-two-one'>
        <div className='cont-mail'>
          <div className='contact-icon'><MailIcon /></div>
          <div className='contact-text'>
          E-MAIL <br />
          ibrabasmac14@gmail.com  
          </div>
        </div>
        <div className='cont-mail'>
          <div className='contact-icon'><LocationOnIcon /> </div>
          <div className='contact-text'>
          LOCATION <br />
          Istanbul, Turkey
          </div>
        </div>
      </Card>
      <Card className='cont-two-two'>
      <Card.Body className='social-logos'>
      <Card.Link className='about-lin' href="https://www.linkedin.com/in/ibrahimbasmaci/" target="_blank"><LinkedInIcon /></Card.Link>
      <Card.Link className='about-git' href="https://github.com/ibrbsmc" target="_blank"><GitHubIcon /></Card.Link>
      <Card.Link className='about-mail' href="https://mail.google.com/mail/?view=cm&to=ibrabasmac14@gmail.com" target="_blank"><MailIcon /></Card.Link>
      <Card.Link className='about-insta' href="https://www.instagram.com/ibrbsmc/"  target="_blank"><InstagramIcon /></Card.Link>
      <Card.Link className='about-medium' href='https://medium.com/@ibrabasmac14' target='_blank'><BookIcon /></Card.Link>
      </Card.Body>
      </Card>
      </Card>
    </Card>
    </Container>
    </motion.div>
  )
}

export default Contact