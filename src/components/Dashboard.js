import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6">Widget 1</Typography>
            <Typography variant="body1">Content</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h6">Widget 2</Typography>
            <Typography variant="body1">Content</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
