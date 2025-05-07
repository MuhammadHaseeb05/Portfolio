import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" component="div" sx={{fontWeight:'bold',fontFamily:'monospace'}}>
          My Portfolio
        </Typography>
        <Box>
          {['Home', 'Projects', 'About', 'Contact'].map((label) => (
            <Button
              key={label}
              color="inherit"
              sx={{
                mx: 1,
                '&:hover': {
                  backgroundColor: '#ffffff22',
                  fontWeight: 'bold'
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
