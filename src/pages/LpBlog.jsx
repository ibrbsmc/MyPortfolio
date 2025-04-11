import React from 'react'
import '../css/LpBlog.css'
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import BlogItem from '../components/BlogItem';
import { BlogList } from '../helper/BlogList';
import { Link } from 'react-router-dom'; // 👈 Link import edildi




const LpBlog = () => {
  return (
    <Card className='lp-projects'>
      <Card.Body className='lpp-main-body'>
        <Card.Title className='lp-skills-title'>Latest Blogs</Card.Title>
        <Button className='lm-skills' as={Link} to="/blog">Explore More</Button>
      </Card.Body>
      <div className='lp-projects-div'>
              {BlogList.slice(-3).reverse().map((blog, index) => {
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
    </Card>
  )
}

export default LpBlog