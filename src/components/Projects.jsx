import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

function Projects() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3].map((id) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6">Project {id}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Description for project {id}.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
