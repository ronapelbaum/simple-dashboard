import * as React from 'react';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const DashboardBarChart = ({ config, data, loading}) => {
  if (!data || loading) {
    return null;
  }
  return (
    <Chart data={data}>
      <Title text={config.title} />
      <ArgumentAxis />
      <ValueAxis />
      <BarSeries
        valueField={config.valueField}
        argumentField={config.argumentField}
      />
      <Animation />
    </Chart>
  );
};

export default DashboardBarChart;
