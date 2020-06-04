import React from 'react';
import { Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const LoadingPaper = ({ loading, children }) =>
  loading ? (
    <Paper elevation="5" style={{ padding: "20px" }}>
      <Skeleton variant="text" height={50} width="40%" />
      <Skeleton variant="rect" height={400} />
    </Paper>
  ) : (
    <Paper elevation="5">{children}</Paper>
  );

export default LoadingPaper;
