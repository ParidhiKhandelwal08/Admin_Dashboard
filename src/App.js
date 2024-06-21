import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Chart from './components/Chart';
import Calendar from './components/Calendar';
import Kanban from './components/Kanban';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [page, setPage] = useState('Dashboard');

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} setPage={setPage} />
      <Container style={{ marginTop: '20px' }}>
        {page === 'Dashboard' && <Dashboard />}
        {page === 'Table' && <Table />}
        {page === 'Chart' && <Chart />}
        {page === 'Calendar' && <Calendar />}
        {page === 'Kanban' && <Kanban />}
      </Container>
    </ThemeProvider>
  );
};

export default App;
