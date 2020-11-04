import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerTitle: {
    marginTop: "100px",
    fontSize: "1.6em",
    fontFamily: "roboto, sans serif"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.headerTitle}>
      <h1>Browse articles</h1>
    </header>
  )
}

export default Header;