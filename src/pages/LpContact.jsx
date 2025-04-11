import React from 'react'
import '../css/LpContact.css'
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
const LpContact = () => {
  return (
    <Card className='lp-projects'>
        <Card.Body className='lpp-main-body'>
            <Card.Title className='lp-contact-title'>Contact Me <hr /></Card.Title>
        </Card.Body>
        <div className='contact-icons'>
            <Card.Link className='lin-icon' href="https://www.linkedin.com/in/ibrahimbasmaci/" target="_blank"><LinkedInIcon /></Card.Link>
            <Card.Link className='git-icon' href="https://github.com/ibrbsmc" target="_blank"><GitHubIcon /></Card.Link>
            <Card.Link className='mail-icon' href="https://mail.google.com/mail/?view=cm&to=ibrabasmac14@gmail.com"  target="_blank"><MailIcon /></Card.Link>
            <Card.Link className='mail-icon' href="https://www.instagram.com/ibrbsmc/"  target="_blank"><InstagramIcon /></Card.Link>
        </div>
    </Card>
  )
}

export default LpContact