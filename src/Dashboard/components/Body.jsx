import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import DashboardBarChart from './DashboardBarChart';
import DashboardTable from './DashboardTable';
import styles from './Body.module.scss';
import DashboardSideBySideBar from './DashboardSideBySideBar';
import { loadingModel, costPerClickModel, costPerClickConfig } from '../model';
import DashboardLineChart from './DashboardLineChart';

const Body = ({ lineChartData, lineChartConfig }) => (
  <Container className={styles.container}>
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <DashboardBarChart />
      </Grid>
      <Grid item xs={6}>
        <DashboardLineChart data={lineChartData} config={lineChartConfig} />
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

const mapStateToProps = (state) => ({
  loading: loadingModel(state),
  lineChartData: costPerClickModel(state),
  lineChartConfig: costPerClickConfig(),
});

export default connect(mapStateToProps)(Body);
