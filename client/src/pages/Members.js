import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Stack,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  InputAdornment,
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  PersonAdd,
  PersonRemove,
  Badge,
  Email,
  Phone,
  Work,
  CalendarToday,
} from '@mui/icons-material';

const Members = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  // Sample data
  const [members, setMembers] = useState([
    {
      id: 'M001',
      name: 'Brian Peace Teka',
      dob: '2002-03-28',
      email: 'peaceteka2@gmail.com',
      occupation: 'Software Engineer',
      phone: '+254 740127973',
      nationalId: '39303165',
      joinDate: '2025-01-15',
      status: 'active',
      contributionsTotal: 25000
    },
    // Add more sample members here
  ]);

  const handleAddMember = (newMember) => {
    setMembers([...members, { ...newMember, id: `M${members.length + 1}`.padStart(4, '0') }]);
    setOpenAddDialog(false);
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
    setOpenDeleteDialog(false);
    setSelectedMember(null);
  };

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">Members Management</Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PersonAdd />}
            onClick={() => setOpenAddDialog(true)}
          >
            Add New Member
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<PersonRemove />}
            onClick={() => setOpenDeleteDialog(true)}
          >
            Remove Member
          </Button>
        </Stack>
      </Box>

      {/* Search and Filters */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search members by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      {/* Members Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Member ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Occupation</TableCell>
              <TableCell>Join Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  <Stack>
                    <Typography variant="body2">{member.email}</Typography>
                    <Typography variant="body2" color="textSecondary">{member.phone}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{member.occupation}</TableCell>
                <TableCell>{member.joinDate}</TableCell>
                <TableCell>
                  <Chip
                    label={member.status}
                    color={member.status === 'active' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    color="error"
                    onClick={() => {
                      setSelectedMember(member);
                      setOpenDeleteDialog(true);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Member Dialog */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Member</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              placeholder="Enter member's full name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Badge />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarToday />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              placeholder="Enter email address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter phone number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Occupation"
              placeholder="Enter occupation"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Work />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="National ID"
              placeholder="Enter national ID number"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => {
            // TODO: Implement form validation and submission
            handleAddMember({
              name: 'New Member',
              dob: '2000-01-01',
              email: 'new@example.com',
              phone: '+254 700000000',
              occupation: 'Not Specified',
              nationalId: '00000000',
              joinDate: new Date().toISOString().split('T')[0],
              status: 'active',
              contributionsTotal: 0
            });
          }}>Add Member</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Member Dialog */}
      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Remove Member</DialogTitle>
        <DialogContent>
          {selectedMember ? (
            <Typography>Are you sure you want to remove {selectedMember.name} ({selectedMember.id})?</Typography>
          ) : (
            <TextField
              fullWidth
              label="Member ID"
              placeholder="Enter member ID to remove"
              sx={{ mt: 2 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            color="error"
            onClick={() => selectedMember && handleDeleteMember(selectedMember.id)}
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Members;
