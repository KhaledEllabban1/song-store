import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Singer from '../singer/singer.component';
import Album from '../albums/album.component';
import Song from '../songs/song.component';
import Subscribe from '../subscribe/subscribe.componet';
import Receipt from '../receipt/receipt.component';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  pos: {
    marginTop:50,
    marginBottom:20 
  },
  down: {
    marginTop:50,
  },
  button: {
    marginBottom:30,
  }
}));

function getSteps() {
  return ['Select Singers', 'Select Albums', 'Select Songs', 'Enter your Data'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Singer />;
    case 1:
      return <Album />;
    case 2:
      return <Song />;
    case 3:
      return <Subscribe/>;
    case 4:
      return 'Receipt4444444444444444444';
    default:
      return 'Unknown stepIndex';
  }
}

const HorizontalLabelPositionBelowStepper = ({userData}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
        <>
          <Receipt />
          <div className={classes.down}>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleBack}>back</Button>
            {/* {
              userData !== null ? (<Button onClick={handleBack}>back</Button>) : null 
            } */}
            
          </div>
        </>
        ) : (
          <div> 
            <Typography component={'span'} className={classes.instructions}>{getStepContent(activeStep)} </Typography>
            <div className={classes.pos}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {
                activeStep === steps.length - 1 ? (
                    userData === null ?  null : ( 
                      <Button variant="contained" color="primary" onClick={handleNext}>
                        Finish
                      </Button>
                     )
                  
                ) : (
                  <Button variant="contained" color="primary" onClick={handleNext}>
                    next
                  </Button>
                )
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  userData: state.singer.userData
})
export default connect(mapStateToProps)(HorizontalLabelPositionBelowStepper);