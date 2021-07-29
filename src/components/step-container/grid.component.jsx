import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HorizontalLabelPositionBelowStepper from '../stepper/stepper.component'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CenteredGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <HorizontalLabelPositionBelowStepper />
        </Grid>
        <Grid item xs={12} container justifyContent="space-around">
          <Paper className={classes.paper}> count = 0 </Paper>

          <Paper className={classes.paper}> Amount = 0  </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
export default CenteredGrid;
