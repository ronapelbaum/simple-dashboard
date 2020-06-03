import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import DashboardBarChart from './DashboardBarChart';
import DashboardTable from './DashboardTable';
import styles from './Body.module.scss';
import DashboardSideBySideBar from './DashboardSideBySideBar';

const Body = () => (
  <Container className={styles.container}>
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <DashboardBarChart />
      </Grid>
      <Grid item xs={6}>
        <DashboardSideBySideBar />
      </Grid>
      <Grid item xs={6}>
        <DashboardTable />
      </Grid>
    </Grid>
  </Container>
);

export default Body;
