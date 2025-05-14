import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Savings = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Mock data - replace with actual API calls
  const memberSavings = [
    { id: 1, name: 'John Doe', savings: 50000, shares: 100 },
    { id: 2, name: 'Jane Smith', savings: 75000, shares: 150 },
    // Add more members
  ];

  const savingsHistory = [
    { month: 'Jan', amount: 120000 },
    { month: 'Feb', amount: 150000 },
    { month: 'Mar', amount: 180000 },
    // Add more months
  ];

  const nextMeeting = {
    date: '2025-12-15',
    time: '14:00',
    location: 'Main Office',
    agenda: 'Annual Savings Distribution'
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderPersonalSavings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Your Savings Summary</Typography>
            <Typography variant="h4" color="primary">KES 50,000</Typography>
            <Typography variant="subtitle1" color="text.secondary">Total Savings</Typography>
            <Button variant="contained" sx={{ mt: 2 }}>Add Savings</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Your Shares</Typography>
            <Typography variant="h4" color="secondary">100 Shares</Typography>
            <Typography variant="subtitle1" color="text.secondary">Value: KES 100,000</Typography>
            <Button variant="outlined" sx={{ mt: 2 }}>Buy Shares</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderGroupSavings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Member Name</TableCell>
                <TableCell align="right">Total Savings</TableCell>
                <TableCell align="right">Shares</TableCell>
                <TableCell align="right">Total Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memberSavings.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell align="right">KES {member.savings.toLocaleString()}</TableCell>
                  <TableCell align="right">{member.shares}</TableCell>
                  <TableCell align="right">KES {(member.savings + (member.shares * 1000)).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Group Savings Trend</Typography>
            <BarChart width={800} height={300} data={savingsHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" name="Total Savings" />
            </BarChart>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderMeetings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Next Annual Distribution Meeting</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1"><strong>Date:</strong> {nextMeeting.date}</Typography>
              <Typography variant="body1"><strong>Time:</strong> {nextMeeting.time}</Typography>
              <Typography variant="body1"><strong>Location:</strong> {nextMeeting.location}</Typography>
              <Typography variant="body1"><strong>Agenda:</strong> {nextMeeting.agenda}</Typography>
            </Box>
            <Chip
              label="Mark Your Calendar"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => alert('Calendar feature coming soon!')}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Savings Management
      </Typography>
      
      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Personal Savings" />
        <Tab label="Group Overview" />
        <Tab label="Distribution Meetings" />
      </Tabs>

      {activeTab === 0 && renderPersonalSavings()}
      {activeTab === 1 && renderGroupSavings()}
      {activeTab === 2 && renderMeetings()}
    </Box>
  );
};

export default Savings;
