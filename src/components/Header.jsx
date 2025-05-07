import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';


function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navItems = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" fontWeight="bold" fontFamily="monospace">
          Haseeb's Portfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 200 }}>
                {navItems.map((item) => (
                  <ListItem button key={item} onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box>
            {navItems.map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{
                  mx: 1,
                  '&:hover': {
                    backgroundColor: '#ffffff22',
                    fontWeight: 'bold'
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
  </Toolbar>
</AppBar>

  );
}

export default Header;
