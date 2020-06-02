import React from 'react';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { connect } from 'react-redux';
import styles from './DashboardTable.module.scss';
import { dataModel, loadingModel } from '../model';

const DashboardTable = ({ data, loading }) => {
  if (!data[0] || loading) {
    return <Skeleton variant="rect" width={210} height={118} />;
  }
  const colDef = Object.keys(data[0]).filter((d) => d !== "id");
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow className={styles.headerRow}>
            {colDef.map((col) => (
              <TableCell className={styles.headerCell}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {colDef.map((col) => (
                <TableCell>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({
  loading: loadingModel(state),
  data: dataModel(state),
});

export default connect(mapStateToProps)(DashboardTable);