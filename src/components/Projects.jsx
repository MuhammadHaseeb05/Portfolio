import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  CardActions
} from '@mui/material';

const projectData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal website built with React and MUI.',
    image: '/images/project1.jpg',
    code: 'https://github.com/yourusername/portfolio',
    demo: 'https://your-portfolio.netlify.app',
  },
  {
    id: 2,
    title: 'ToDo App',
    description: 'A responsive ToDo application using React hooks.',
    image: '/images/project2.jpg',
    code: 'https://github.com/yourusername/todo-app',
    demo: 'https://todo-app-demo.netlify.app',
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A simple weather app fetching data from OpenWeather API.',
    image: '/images/project3.jpg',
    code: 'https://github.com/yourusername/weather-app',
    demo: 'https://weather-app-demo.netlify.app',
  },
];

function Projects() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projectData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                height: '100%',
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.code} target="_blank">
                  View Code
                </Button>
                <Button size="small" href={project.demo} target="_blank">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
