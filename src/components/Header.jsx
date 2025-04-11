import React from 'react';
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LaptopMan from '/pcman.jpg';
import ContrastIcon from '@mui/icons-material/Contrast';
import { Link } from 'react-router-dom'; // 👈 Link import edildi

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container className="header-container">

        {/* Sol kısım: Başlık */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img className='h-image' src={LaptopMan} alt="Logo" />
          <span className="ms-2 h-title">IB</span>           
        </Navbar.Brand>

        {/* Menü ve Contrast Icon */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="header-nav">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Contrast Butonu */}
          <div className="contrast-icon" onClick={() => setDarkMode(!darkMode)}>
            <ContrastIcon style={{ fontSize: '24px', cursor: 'pointer' }} />
          </div>
        </Navbar.Collapse>

        {/* Toggle Butonu (Sağda Duracak) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

      </Container>
    </Navbar>
  );
}

export default Header;
