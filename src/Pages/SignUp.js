import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { NeflixButton, NeflixInput } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';

const SignUp = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    
    const [values, setValues] = useState({   
        email: '',
        password: '',
    });

    const handleInputChange = e => {
        const{name,value} = e.target;
        setValues({
            ...values, 
            [name]:value
        });
    }

    const signIn = (e) =>{ 
        e.preventDefault();
        auth.signInWithEmailAndPassword(values.email, values.password)
        .then((authUser) => navigate('/'))
        .catch((err)=>alert(err.message))    
    };

    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(values.email, values.password)
        .then((authUser) => navigate('/'))
        .catch((err)=>alert(err.message))        
    };
    return (
        <div className = {classes.root}>
            <Typography variant = 'h5' align = 'left'>
                Sign In
            </Typography>
            <form className = {classes.form}>
                <NeflixInput
                    type='email' 
                    name='email'
                    value={values.email}
                    onChange = {handleInputChange}
                    placeholder='Email' 
                    className={classes.email} />
                <NeflixInput
                    type='password'
                    name='password'
                    value={values.password} 
                    onChange = {handleInputChange}
                    radius ='5px' 
                    placeholder ='Password' 
                    className={classes.password} />
                <NeflixButton
                onClick={signIn}
                wide='medium'  
                radius ='5px'
                type='submit'>
                    Sign In</NeflixButton>
                <Typography 
                variant='subtitle2'>
                    New to Netflix ? {" "} 
                    <span 
                    className={classes.signupLink} 
                    onClick={register}>
                    Sign Up Now ? {" "} 
                    </span>
                </Typography>
            </form>
        </div>  
    )
}

const useStyles = makeStyles((theme) => ({
    root : {
        maxWidth: '350px',
        width: '20rem',
        height: '25rem',
        background: 'rgba(0,0,0,0.65)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }, form :{
        width: '80%',
    },
    email: {
        marginBottom: theme.spacing(2),
    },
    password: {
        marginBottom: theme.spacing(4),
    },
    signupLink: {
        color: '#fff',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        }
    }

}));

export default SignUp

