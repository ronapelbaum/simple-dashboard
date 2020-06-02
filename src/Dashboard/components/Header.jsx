import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { titleModel } from '../model';

const Header = ({ title }) => {
  if (document.title !== title) {
    document.title = title;
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={styles.title} variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  title: titleModel(state),
});
export default connect(mapStateToProps)(Header);
