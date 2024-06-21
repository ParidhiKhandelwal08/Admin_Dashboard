import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Sidebar = ({ open, toggleSidebar, setPage }) => {
  return (
    <Drawer open={open} onClose={toggleSidebar}>
      <List>
        <ListItem button onClick={() => setPage('Dashboard')}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setPage('Table')}>
          <ListItemIcon><TableChartIcon /></ListItemIcon>
          <ListItemText primary="Table" />
        </ListItem>
        <ListItem button onClick={() => setPage('Chart')}>
          <ListItemIcon><BarChartIcon /></ListItemIcon>
          <ListItemText primary="Chart" />
        </ListItem>
        <ListItem button onClick={() => setPage('Calendar')}>
          <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button onClick={() => setPage('Kanban')}>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
