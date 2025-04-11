import React from 'react'
import '../css/BlogItem.css'
import Card from 'react-bootstrap/Card';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const BlogItem = ({b_image,b_title,b_description,b_date,linkblog}) => {
  return (
    <Card className='project-item'>
        <Card.Img src={b_image}></Card.Img>
        <Card.Body className='project-item-body'>
            <Card.Title className='project-item-title'>{b_title}</Card.Title>
            <Card.Text className='project-item-desc'>{b_description}</Card.Text>
            <div className='icon-container'>
                <Card.Text><div className='blog-item-icon'><CalendarTodayIcon />{b_date}</div></Card.Text>
                <Card.Link href={linkblog} target='_blank'><div className='pr-item-icon'><LaunchIcon />Launch</div></Card.Link>
            </div>
        </Card.Body>
    </Card>
  )
}

export default BlogItem