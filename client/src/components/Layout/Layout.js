import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import logo from '../../assets/logo.svg';
import {
  Menu as MenuIcon,
  Dashboard,
  People,
  Savings,
  AccountBalance,
  Assessment,
  Person,
} from '@mui/icons-material';

const drawerWidth = 240;

const Layout = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Members', icon: <People />, path: '/members' },
    { text: 'Savings', icon: <Savings />, path: '/savings' },
    { text: 'Loans', icon: <AccountBalance />, path: '/loans' },
    { text: 'Reports', icon: <Assessment />, path: '/reports' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={logo} alt="Ustawi Path Logo" style={{ height: '120px', marginBottom: '12px' }} />
          </Box>
        </Link>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component="a" href={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo} alt="Ustawi Path Logo" style={{ height: '50px', marginRight: '20px' }} />
              <Typography variant="h6" noWrap component="div">
                Ustawi Path Social Enterprise
              </Typography>
            </Box>
            <IconButton color="inherit">
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
