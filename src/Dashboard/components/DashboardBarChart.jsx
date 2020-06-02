import * as React from 'react';
import {Paper} from '@material-ui/core';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { connect } from 'react-redux';
import { loadingModel, impressionsModel, impressionsBarDef } from '../model';

const DashboardBarChart = ({ barDef, data, loading}) => {
  if (!data || loading) {
    return null;
  }
  return (
    <Paper>
      <Chart data={data}>
        <Title text={barDef.title} />
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries
          valueField={barDef.valueField}
          argumentField={barDef.argumentField}
        />
        <Animation />
      </Chart>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  loading: loadingModel(state),
  data: impressionsModel(state),
  barDef: impressionsBarDef(),
});

export default connect(mapStateToProps)(DashboardBarChart);
