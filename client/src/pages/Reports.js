import { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  IconButton,
  Tooltip,
  Chip
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Download,
  Print,
  Share,
  TrendingUp,
  Assessment,
  AccountBalance,
  Group,
  ShowChart,
  PieChart as PieChartIcon,
  DateRange
} from '@mui/icons-material';

const Reports = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState('year');
  const [reportType, setReportType] = useState('detailed');

  // Mock data - replace with API calls
  const financialOverview = {
    totalAssets: 15000000,
    totalLiabilities: 8000000,
    netWorth: 7000000,
    totalIncome: 2500000,
    totalExpenses: 1800000,
    netIncome: 700000
  };

  const monthlyData = [
    { month: 'Jan', savings: 450000, loans: 800000, income: 120000 },
    { month: 'Feb', savings: 480000, loans: 850000, income: 125000 },
    { month: 'Mar', savings: 520000, loans: 900000, income: 130000 },
    { month: 'Apr', savings: 550000, loans: 920000, income: 128000 },
    { month: 'May', savings: 600000, loans: 950000, income: 135000 }
  ];

  const portfolioDistribution = [
    { name: 'Emergency Loans', value: 2500000, color: '#0088FE' },
    { name: 'Development Loans', value: 5000000, color: '#00C49F' },
    { name: 'Education Loans', value: 3000000, color: '#FFBB28' },
    { name: 'Fixed Deposits', value: 4000000, color: '#FF8042' }
  ];

  const memberMetrics = {
    totalMembers: 250,
    activeLoans: 120,
    regularSavers: 200,
    defaulters: 5,
    newMembersThisMonth: 8,
    averageSavingsPerMember: 180000
  };

  const riskMetrics = {
    defaultRate: 2.5,
    portfolioAtRisk: 3.8,
    provisionCoverage: 150,
    capitalAdequacy: 18.5,
    liquidityRatio: 42.3
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const formatCurrency = (amount) => {
    return `KES ${amount.toLocaleString()}`;
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Financial Reports</Typography>
        <Box>
          <FormControl size="small" sx={{ minWidth: 120, mr: 2 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="month">This Month</MenuItem>
              <MenuItem value="quarter">This Quarter</MenuItem>
              <MenuItem value="year">This Year</MenuItem>
            </Select>
          </FormControl>
          <Tooltip title="Download Report">
            <IconButton>
              <Download />
            </IconButton>
          </Tooltip>
          <Tooltip title="Print Report">
            <IconButton>
              <Print />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share Report">
            <IconButton>
              <Share />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab icon={<Assessment />} label="Overview" />
        <Tab icon={<ShowChart />} label="Financial Analysis" />
        <Tab icon={<Group />} label="Member Statistics" />
        <Tab icon={<PieChartIcon />} label="Portfolio Analysis" />
      </Tabs>

      {activeTab === 0 && (
        <Grid container spacing={3}>
          {/* Financial Overview Cards */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Total Assets</Typography>
                <Typography variant="h4" color="primary">
                  {formatCurrency(financialOverview.totalAssets)}
                </Typography>
                <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <TrendingUp sx={{ mr: 1 }} /> +8.5% from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Net Income</Typography>
                <Typography variant="h4" color="success.main">
                  {formatCurrency(financialOverview.netIncome)}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Profit Margin: {((financialOverview.netIncome / financialOverview.totalIncome) * 100).toFixed(1)}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>Total Liabilities</Typography>
                <Typography variant="h4">
                  {formatCurrency(financialOverview.totalLiabilities)}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Debt Ratio: {((financialOverview.totalLiabilities / financialOverview.totalAssets) * 100).toFixed(1)}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Monthly Trends Chart */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Monthly Trends</Typography>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Line type="monotone" dataKey="savings" stroke="#8884d8" name="Savings" />
                      <Line type="monotone" dataKey="loans" stroke="#82ca9d" name="Loans" />
                      <Line type="monotone" dataKey="income" stroke="#ffc658" name="Income" />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Risk Metrics */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Risk Metrics</Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Metric</TableCell>
                        <TableCell align="right">Value</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Default Rate</TableCell>
                        <TableCell align="right">{riskMetrics.defaultRate}%</TableCell>
                        <TableCell>
                          <Chip
                            label="Good"
                            color="success"
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Portfolio at Risk</TableCell>
                        <TableCell align="right">{riskMetrics.portfolioAtRisk}%</TableCell>
                        <TableCell>
                          <Chip
                            label="Warning"
                            color="warning"
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Capital Adequacy</TableCell>
                        <TableCell align="right">{riskMetrics.capitalAdequacy}%</TableCell>
                        <TableCell>
                          <Chip
                            label="Excellent"
                            color="success"
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 1 && (
        <Grid container spacing={3}>
          {/* Financial Analysis */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Income vs Expenses</Typography>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <RechartsTooltip />
                      <Legend />
                      <Bar dataKey="income" fill="#82ca9d" name="Income" />
                      <Bar dataKey="loans" fill="#8884d8" name="Loan Disbursements" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 2 && (
        <Grid container spacing={3}>
          {/* Member Statistics */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Member Overview</Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Total Members</TableCell>
                        <TableCell align="right">{memberMetrics.totalMembers}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Active Loans</TableCell>
                        <TableCell align="right">{memberMetrics.activeLoans}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Regular Savers</TableCell>
                        <TableCell align="right">{memberMetrics.regularSavers}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>New Members This Month</TableCell>
                        <TableCell align="right">{memberMetrics.newMembersThisMonth}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Average Savings per Member</TableCell>
                        <TableCell align="right">{formatCurrency(memberMetrics.averageSavingsPerMember)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Member Activity</Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Active Loans', value: memberMetrics.activeLoans },
                          { name: 'Regular Savers', value: memberMetrics.regularSavers },
                          { name: 'Inactive', value: memberMetrics.totalMembers - memberMetrics.regularSavers }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        <Cell fill="#82ca9d" />
                        <Cell fill="#8884d8" />
                        <Cell fill="#ffc658" />
                      </Pie>
                      <RechartsTooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {activeTab === 3 && (
        <Grid container spacing={3}>
          {/* Portfolio Analysis */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Loan Portfolio Distribution</Typography>
                <Box sx={{ height: 400 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={portfolioDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {portfolioDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Portfolio Summary</Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      {portfolioDistribution.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell align="right">{formatCurrency(item.value)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Reports;
