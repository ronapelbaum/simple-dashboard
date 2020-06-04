import * as React from 'react';
import {Paper} from '@material-ui/core';
import {
  Chart,
  LineSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { connect } from 'react-redux';
import { loadingModel, impressionsModel, impressionsBarDef } from '../model';

const DashboardLineChart = ({ config, data, loading}) => {
  if (!data || loading) {
    return null;
  }
  return (
    <Paper elevation="5">
      <Chart data={data}>
        <Title text={config.title} />
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries
          valueField={config.valueField}
          argumentField={config.argumentField}
        />
        <Animation />
      </Chart>
    </Paper>
  );
};

export default DashboardLineChart;
