import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" fontWeight="bold">
        I'm Haseeb
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
        A computer science student, exploring different aspects of this field. I'm interested in Web development, Game development, AI and more.
      </Typography>

      <Button variant="contained">View Projects</Button>
    </Box>
  );
}

export default Home;
