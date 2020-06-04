import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { DashboardBarChart, DashboardLineChart, DashboardSideBySideBar, DashboardTable, LoadingPaper } from '../../common';
import { loadingModel, costPerClickModel, costPerClickConfig, conversionModel, conversionConfig, impressionsConfig, impressionsModel, dataModel, tableConfig } from '../model';
import styles from './Body.module.scss';

const Body = ({
  lineChartData,
  lineChartConfig,
  sideBySideChartData,
  sideBySideChartConfig,
  barChartData,
  barChartConfig,
  tableData,
  tableConfig,
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
          <DashboardTable data={tableData} config={tableConfig} />
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
  tableData: dataModel(state),
  tableConfig: tableConfig(),
});

export default connect(mapStateToProps)(Body);
