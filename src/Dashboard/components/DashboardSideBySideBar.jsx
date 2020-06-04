import * as React from 'react';
import { Paper } from '@material-ui/core';
import {
  Chart,
  BarSeries,
  Title,
  Legend,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import styles from './DashboardSideBySideBar.module.scss';

const LegendRoot = (props) => (
  <Legend.Root className={styles.legend} {...props} />
);
const DashboardSideBySideBar = ({ data, config, loading}) => {
  if (!data.length || loading) {
    return null;
  }
  return (
    <Chart data={data}>
      <Title text={config.title} />
      <ArgumentAxis />
      <ValueAxis />
      {config.bars.map((bar) => (
        <BarSeries
          name={bar.name}
          valueField={bar.valueField}
          argumentField={bar.argumentField}
        />
      ))}
      <Animation />
      <Stack />
      <Legend position="bottom" rootComponent={LegendRoot} />
    </Chart>
  );
};

export default DashboardSideBySideBar;
