import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid, Paper } from '@material-ui/core';
import DashboardBarChart from './DashboardBarChart';
import DashboardTable from './DashboardTable';
import styles from './Body.module.scss';
import DashboardSideBySideBar from './DashboardSideBySideBar';
import { loadingModel, costPerClickModel, costPerClickConfig, conversionModel, conversionConfig, impressionsConfig, impressionsModel } from '../model';
import DashboardLineChart from './DashboardLineChart';

const Body = ({
  lineChartData,
  lineChartConfig,
  sideBySideChartData,
  sideBySideChartConfig,
  barChartData,
  barChartConfig,
  loading,
}) => (
  <Container maxWidth="xl" className={styles.container}>
    <Grid container spacing={6}>
      <Grid item lg={6} sm={12}>
        <Paper elevation="5">
          <DashboardBarChart data={barChartData} config={barChartConfig} />
        </Paper>
      </Grid>
      <Grid item lg={6} sm={12}>
        <Paper elevation="5">
          <DashboardLineChart data={lineChartData} config={lineChartConfig} />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation="5">
          <DashboardSideBySideBar data={sideBySideChartData} config={sideBySideChartConfig} />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper elevation="5">
          <DashboardTable />
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

const mapStateToProps = (state) => ({
  loading: loadingModel(state),
  lineChartData: costPerClickModel(state),
  lineChartConfig: costPerClickConfig(),
  sideBySideChartData: conversionModel(state),
  sideBySideChartConfig: conversionConfig(),
  barChartData: impressionsModel(state),
  barChartConfig: impressionsConfig(),
});

export default connect(mapStateToProps)(Body);
