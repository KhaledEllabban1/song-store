import React , { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { userData } from '../../redux/singer/singer.action';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1,
      boxShadow:0
    },
    title: {
      fontSize: 14,
    },
    pos: {
      margin:20,
    },
    button: {
      marginBottom:30,
    }
  });


const Subscribe = ({userData, choosedSongs, user}) => {
  const classes = useStyles();
  const [ userCredentials, setCredentials ] = useState({
    name: '',
    email : '',
    mobile : ''
  });
  const handleChange = event =>{
    const {name , value} = event.target;
    setCredentials({...userCredentials, [name]:value });
  };
  const { name, email, mobile } = userCredentials;

  const handleSubmit = event => {
        event.preventDefault();
        userData(userCredentials);
    };
  
  return (
    <Grid container spacing={7} justifyContent="space-around">
        {
          choosedSongs.length ?
          (
            <Card className={classes.root}> 
              <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography className={classes.pos} variant="h5" component={'span'}>
                        <TextField id="outlined-basic" label="Name" variant="outlined"  
                          name='name'
                          value={name}
                          onChange={handleChange}/>
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component={'span'}>
                        <TextField id="outlined-basic" label="Email" type="email" variant="outlined"
                        name='email'
                        value={email}
                        onChange={handleChange}/>
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component={'span'}>
                        <TextField id="outlined-basic" label="Mobile" type="number" variant="outlined"
                        name='mobile'
                        value={mobile}
                        onChange={handleChange}/>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        // disabled= {user !== null ? true : false}
                        className={classes.button}
                        endIcon={<SendIcon>send</SendIcon>}
                    >
                        Send
                    </Button>
               </form>        
            </Card>
          ) : (<span className='choose'> Choose Songs </span>)
        }
      </Grid>
  );
}

const mapDispatchToProps = dispatch => ({
  userData: userCredentials => dispatch(userData(userCredentials))
});

const mapStateToProps = state => ({
  choosedSongs : state.singer.choosedSongs,
  user : state.singer.userData
})
export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
