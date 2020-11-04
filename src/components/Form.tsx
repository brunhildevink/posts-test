import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  handleSearchFilter: (e: any) => void;
}

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const Form = ({ handleSearchFilter }: Props) => {
  const classes = useStyles();

  return (
    <Grid className={classes.formContainer}>
      <form onSubmit={handleSearchFilter}>
        <TextField label="Search by title" variant="standard" type="text" />
      </form>
    </Grid>
  )
}

export default Form;