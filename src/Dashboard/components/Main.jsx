import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Header from './Header';
import Body from './Body';

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
      <Body />
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
