import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './assets/styles/theme';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Savings from './pages/Savings';
import Loans from './pages/Loans';
import Reports from './pages/Reports';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/members" element={<Members />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/reports" element={<Reports />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
