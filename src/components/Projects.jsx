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
    image: '',
    code: '',
    demo: '',
  },
  {
    id: 2,
    title: 'Shogi Game',
    description: 'Shogi game made in C++',
    image: '',
    code: '',
    demo: '',
  },
  {
    id: 3,
    title: 'Snake Game',
    description: 'Snake game made in C++',
    image: '',
    code: '',
    demo: '',
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
