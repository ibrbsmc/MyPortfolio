import React from 'react'
import Card from 'react-bootstrap/Card';
import { BlogList } from '../helper/BlogList';
import BlogItem from '../components/BlogItem';
import '../css/Projects.css'
import Container from 'react-bootstrap/esm/Container.js';
import { motion } from 'framer-motion';

const Blog = () => {
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
            <Card.Title className='projects-title'>The Latest Blogs</Card.Title>
            <div className='title-underline'></div>
                    <div className='map-projects-div'>
      {[...BlogList].reverse().map((blog, index) => {
      return (
      
      <BlogItem
      key={index}
      b_image={blog.b_image}
      b_title={blog.b_title}
      b_description={blog.b_description}
      b_date={blog.b_date}
      linkblog={blog.linkblog}
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

export default Blog