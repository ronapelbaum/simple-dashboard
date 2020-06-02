import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import * as Actions from '../actions';
import Header from './Header';
import styles from './Main.module.scss';
import DashboardTable from './DashboardTable';

const Main = ({
  getData,
}) => {
  useEffect(() => {
    // componentDidMount
    getData()
  }, [getData]);
  return (
    <React.Fragment>
      <Header />
      <Container className={styles.container}>
        <DashboardTable />
      </Container>
    </React.Fragment>
  );
};
Main.propTypes = {
  getData: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(Actions.getData()),
});

export default connect(null, mapDispatchToProps)(Main);
