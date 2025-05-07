import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Paper,
} from '@mui/material';
// Import the image
import growthImage from '../assets/savings-growth.jpg';
import {
  People,
  Savings,
  AccountBalance,
  TrendingUp,
} from '@mui/icons-material';

const Dashboard = () => {
  const theme = useTheme();

  const stats = [
    {
      title: 'Total Members',
      value: '150',
      icon: <People sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
    },
    {
      title: 'Total Savings',
      value: 'KES 2.5M',
      icon: <Savings sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main,
    },
    {
      title: 'Active Loans',
      value: '45',
      icon: <AccountBalance sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main,
    },
    {
      title: 'Monthly Growth',
      value: '15%',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: theme.palette.info.main,
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1 }}>
                      {stat.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: `${stat.color}15`,
                      borderRadius: '50%',
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {React.cloneElement(stat.icon, { sx: { color: stat.color } })}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Card sx={{ bgcolor: '#f8f9fa' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, color: '#2c3e50', fontWeight: 'medium' }}>
              Financial Growth Visualization
            </Typography>
            <Box sx={{ 
              width: '100%',
              bgcolor: '#ffffff',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              height: '400px',
              position: 'relative'
            }}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `url(${growthImage})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                  filter: 'brightness(1.02)',
                  backgroundColor: '#f8f9fa'
                }}
                role="img"
                aria-label="Financial Growth Chart"
              />
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 3, textAlign: 'center', fontSize: '1.1rem' }}>
              Watch your savings grow steadily over time with our structured savings programs and financial guidance.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
