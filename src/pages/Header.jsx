import { AppBar, Toolbar, Typography, Button, IconButton, Switch, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

export default function Header() {
  const theme = useTheme();
  const { mode, toggleTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#1976d2',
      boxShadow: 'none'
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        
        {!isMobile && (
           <Box sx={{ display: 'flex', gap: 4 }}>
           <Button color="inherit" component={Link} to="/">Home</Button>
           <Button color="inherit" component={Link} to="/exchange-rates">Exchange Rates</Button>
           <Button color="inherit" component={Link} to="/about">About</Button>
           <Button color="inherit" component={Link} to="/error">Error Page</Button>
         </Box>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <Typography sx={{ mr: 1 }}>
            {mode === 'light' ? 'Light' : 'Dark'}
          </Typography> */}
          <Switch
            checked={mode === 'dark'}
            onChange={toggleTheme}
            color="default"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}