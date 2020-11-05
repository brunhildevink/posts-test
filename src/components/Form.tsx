import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  handleSearchFilter: (e: any) => void;
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    [theme.breakpoints.up('md')]: {
      display: "flex",
      justifyContent: "flex-end"
    },
  },
  form: {
    [theme.breakpoints.down('md')]: {
      width: "100%"
    }
  }
}));

const Form = ({ handleSearchFilter }: Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSearchFilter}>
        <TextField className={classes.form} label="Search by title" variant="standard" type="text" />
      </form>
    </Grid>
  )
}

export default Form;