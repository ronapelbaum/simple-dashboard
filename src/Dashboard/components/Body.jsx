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
import { Skeleton } from '@material-ui/lab';

const LoadingPaper = ({ loading, children }) => loading ? (
  <Paper elevation="5" style={{ padding: '20px' }}>
    <Skeleton variant="text" height={50} width="40%" />
    <Skeleton variant="rect" height={400} />
  </Paper>
  ) : (
  <Paper elevation="5">
    {children}
  </Paper>
  );

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
        <LoadingPaper loading={loading}>
          <DashboardBarChart data={barChartData} config={barChartConfig} />
        </LoadingPaper>
      </Grid>
      <Grid item lg={6} sm={12}>
        <LoadingPaper loading={loading}>
          <DashboardLineChart data={lineChartData} config={lineChartConfig} />
        </LoadingPaper>
      </Grid>
      <Grid item xs={4}>
        <LoadingPaper loading={loading}>
          <DashboardSideBySideBar data={sideBySideChartData} config={sideBySideChartConfig} />
        </LoadingPaper>
      </Grid>
      <Grid item xs={8}>
        <LoadingPaper loading={loading}>
          <DashboardTable />
        </LoadingPaper>
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
