import Card from 'react-bootstrap/Card';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import '../css/About.css'
import Container from 'react-bootstrap/esm/Container.js';
import React from 'react'
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}


    >
      <Container className='lp-container'>
        <Card className='about-main'>

          <Card className='about-one'>
            <Card.Body className='projects-body'>
              <Card.Title className='projects-title'>About</Card.Title>
              <div className='title-underline'></div>
            </Card.Body>
          </Card>
          <div className='two-three'>
            <Card className='about-two'>
              <div className='image-text'>
              <Card.Img className='gel-uni' variant="top" src="/gelisimuni.png" />
              <Card.Body>
                <Card.Title className='about-present-title'>2022-Present</Card.Title>
              </Card.Body>
              </div>
            </Card>
            <Card className='about-three'>
              <Card.Body className='three-body'>
                <Card.Title>
                  <p className='title-about'><span>Ibrahim Basmacı</span></p>
                </Card.Title>
                <Card.Subtitle className='st-about'>Software Engineer x Web Developer</Card.Subtitle>
                <Card.Text className='about-text'>
                  Hi! I enjoy developing projects and exploring technology. I continuously improve myself in web <br /> design and front-end development.
                  I put my knowledge into practice through my projects. <br />
                  I value both theoretical and practical knowledge.I always strive to improve myself. <br />
                  My goal is to build a strong presence in the software world.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <Card className='icon-mainc-about'>
            <Card.Body className='lp-skills-body'>
              <div className='lps-one-section'>
                <Card.Title className='about-icon-title'>Skills & Technologies</Card.Title>
              </div>
              <div className='lps-two-section'>
                <Card.Text className='lp-about-logos'>
                  <div className='logos-name'><img src="https://static.cdnlogo.com/logos/h/84/html.svg" alt="HTML"></img>HTML</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/c/18/css.svg" alt="CSS"></img>CSS</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg" alt="Bootstrap"></img>BOOTSTRAP</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/j/44/javascript.svg" alt="JavaScript"></img>JS</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/p/3/python.svg" alt="Python"></img>PYTHON</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/r/63/react.svg" alt="React"></img>REACT</div>
                  <div className='logos-name'><img src="https://static.cdnlogo.com/logos/s/63/sass.svg" alt="Sass"></img>SASS</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/t/96/typescript.svg" alt="TypeScript"></img>TS</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/t/58/tailwindcss.svg" alt="Tailwind CSS"></img>TAILWIND</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/v/23/vitejs.svg" alt="Vite"></img>VITE</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/c/36/canva.png" alt="Canva"></img>CANVA</div>
                  <div className="logos-name"><img src="https://static.cdnlogo.com/logos/a/24/amazon-mobile-services.svg" alt="Responsive Design"></img>RESPONSIVE DESIGN</div>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Card>
      </Container>
    </motion.div>
  );
};

export default About;
