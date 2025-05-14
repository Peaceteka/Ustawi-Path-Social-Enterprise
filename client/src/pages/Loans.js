import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Chip,
  LinearProgress,
  Tooltip
} from '@mui/material';
import {
  Assessment,
  AccountBalance,
  Timeline,
  Description,
  Payment,
  Security
} from '@mui/icons-material';

const Loans = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openLoanDialog, setOpenLoanDialog] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  // Mock data - replace with API calls
  const loanTypes = [
    {
      id: 1,
      name: 'Emergency Loan',
      maxAmount: 50000,
      interestRate: 12,
      maxTerm: 12,
      requirements: ['3 months membership', 'Regular savings', 'No existing emergency loan']
    },
    {
      id: 2,
      name: 'Development Loan',
      maxAmount: 500000,
      interestRate: 14,
      maxTerm: 36,
      requirements: ['6 months membership', 'Collateral', 'Business plan']
    },
    {
      id: 3,
      name: 'Education Loan',
      maxAmount: 200000,
      interestRate: 10,
      maxTerm: 24,
      requirements: ['3 months membership', 'Admission letter', 'Fee structure']
    }
  ];

  const myLoans = [
    {
      id: 1,
      type: 'Development Loan',
      amount: 300000,
      disbursedDate: '2025-01-15',
      status: 'Active',
      remainingBalance: 250000,
      nextPayment: '2025-06-15',
      paymentAmount: 15000
    }
  ];

  const loanApplicationSteps = [
    'Select Loan Type',
    'Personal Information',
    'Loan Details',
    'Upload Documents',
    'Review & Submit'
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLoanApplication = () => {
    setOpenLoanDialog(true);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCloseLoanDialog = () => {
    setOpenLoanDialog(false);
    setActiveStep(0);
  };

  const calculateCreditScore = () => {
    // Mock credit score calculation
    return 750;
  };

  const renderLoanApplication = () => (
    <Dialog open={openLoanDialog} onClose={handleCloseLoanDialog} maxWidth="md" fullWidth>
      <DialogTitle>New Loan Application</DialogTitle>
      <DialogContent>
        <Stepper activeStep={activeStep} sx={{ py: 3 }}>
          {loanApplicationSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        {activeStep === 0 && (
          <Grid container spacing={3}>
            {loanTypes.map((loan) => (
              <Grid item xs={12} md={4} key={loan.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{loan.name}</Typography>
                    <Typography>Max Amount: KES {loan.maxAmount.toLocaleString()}</Typography>
                    <Typography>Interest Rate: {loan.interestRate}% p.a.</Typography>
                    <Typography>Max Term: {loan.maxTerm} months</Typography>
                    <Button
                      variant="contained"
                      sx={{ mt: 2 }}
                      onClick={handleNext}
                    >
                      Select
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Additional steps would be implemented here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseLoanDialog}>Cancel</Button>
        {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
        {activeStep < loanApplicationSteps.length - 1 && (
          <Button variant="contained" onClick={handleNext}>Next</Button>
        )}
        {activeStep === loanApplicationSteps.length - 1 && (
          <Button variant="contained" color="primary" onClick={handleCloseLoanDialog}>
            Submit Application
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );

  const renderDashboard = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Active Loans</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Loan Type</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Remaining</TableCell>
                    <TableCell align="right">Next Payment</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myLoans.map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell>{loan.type}</TableCell>
                      <TableCell align="right">KES {loan.amount.toLocaleString()}</TableCell>
                      <TableCell align="right">KES {loan.remainingBalance.toLocaleString()}</TableCell>
                      <TableCell align="right">{loan.nextPayment}</TableCell>
                      <TableCell>
                        <Chip
                          label={loan.status}
                          color={loan.status === 'Active' ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Credit Score</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h3" color="primary">{calculateCreditScore()}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>/850</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={(calculateCreditScore() / 850) * 100}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              Good credit score! You're eligible for most loan types.
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Quick Actions</Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ mb: 1 }}
              onClick={handleLoanApplication}
            >
              Apply for New Loan
            </Button>
            <Button
              variant="outlined"
              fullWidth
            >
              Make Early Payment
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Loan Calculator</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Loan Amount"
                  type="number"
                  fullWidth
                  InputProps={{
                    startAdornment: 'KES'
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Term (months)"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel>Loan Type</InputLabel>
                  <Select label="Loan Type">
                    {loanTypes.map((type) => (
                      <MenuItem key={type.id} value={type.id}>
                        {type.name} ({type.interestRate}%)
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1 }}
                >
                  Calculate
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderLoanTypes = () => (
    <Grid container spacing={3}>
      {loanTypes.map((loan) => (
        <Grid item xs={12} md={4} key={loan.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>{loan.name}</Typography>
              <Typography variant="h4" color="primary">
                {loan.interestRate}%
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Annual Interest Rate
              </Typography>
              
              <Typography variant="subtitle1" gutterBottom>
                Key Features:
              </Typography>
              <Typography>• Max amount: KES {loan.maxAmount.toLocaleString()}</Typography>
              <Typography>• Max term: {loan.maxTerm} months</Typography>
              
              <Typography variant="subtitle1" sx={{ mt: 2 }} gutterBottom>
                Requirements:
              </Typography>
              {loan.requirements.map((req, index) => (
                <Typography key={index}>• {req}</Typography>
              ))}
              
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleLoanApplication}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Loan Management
      </Typography>
      
      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab icon={<Assessment />} label="Dashboard" />
        <Tab icon={<Description />} label="Loan Types" />
        <Tab icon={<Payment />} label="Repayments" />
        <Tab icon={<Security />} label="Collateral" />
      </Tabs>

      {activeTab === 0 && renderDashboard()}
      {activeTab === 1 && renderLoanTypes()}
      {activeTab === 2 && (
        <Typography>Repayment schedule and history will be implemented here</Typography>
      )}
      {activeTab === 3 && (
        <Typography>Collateral management will be implemented here</Typography>
      )}

      {renderLoanApplication()}
    </Box>
  );
};

export default Loans;
