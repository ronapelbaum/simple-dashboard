import * as React from 'react';
import {Paper} from '@material-ui/core';
import {
  Chart,
  LineSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, ArgumentScale,
} from '@devexpress/dx-react-chart';
import { scaleTime } from 'd3-scale';

const DashboardLineChart = ({ config, data, loading}) => {
  if (!data || loading) {
    return null;
  }
  return (
    <Chart data={data}>
      <Title text={config.title} />
      <ArgumentScale factory={scaleTime} />
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries
        valueField={config.valueField}
        argumentField={config.argumentField}
      />
      <Animation />
    </Chart>
  );
};

export default DashboardLineChart;
