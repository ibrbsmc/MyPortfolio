import React from 'react'
import '../css/LpSkills.css'
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // 👈 Link import edildi

const LpSkills = () => {
  return (
    <Card className='lp-skills'>
        <Card.Body className='lp-skills-body'>
        <div className='lps-one-section'>
        <Card.Title className='lp-skills-title'>Skills & Technologies</Card.Title>
        <Button as={Link} to="/about" className='lm-skills'>View All Skills</Button>
        </div>
        <div className='lps-two-section'>
        <Card.Text className='lp-skills-logos'>
        <div className='logos-name'><img src="https://static.cdnlogo.com/logos/h/84/html.svg"></img>HTML</div>
        <div className="logos-name"><img src="https://static.cdnlogo.com/logos/c/18/css.svg"></img>CSS</div>
        <div className="logos-name"><img src="https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg"></img>BOOTSTRAP</div>
        <div className="logos-name"><img src="https://static.cdnlogo.com/logos/j/44/javascript.svg"></img>JS</div>
        <div className="logos-name"><img src="https://static.cdnlogo.com/logos/p/3/python.svg"></img>PYTHON</div>
        <div className="logos-name"><img src="https://static.cdnlogo.com/logos/r/63/react.svg"></img>REACT</div>
        </Card.Text>
        </div>
        </Card.Body>
    </Card>
  )
}

export default LpSkills