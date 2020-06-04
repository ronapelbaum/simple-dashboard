import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import styles from './DashboardTable.module.scss';

const DashboardTable = ({ data, config }) => (
  <Table size="small">
    <TableHead>
      <TableRow className={styles.headerRow}>
        {config.colDef.map((col) => (
          <TableCell className={styles.headerCell}>{col}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row) => (
        <TableRow key={row.id}>
          {config.colDef.map((col) => (
            <TableCell>{row[col]}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DashboardTable;