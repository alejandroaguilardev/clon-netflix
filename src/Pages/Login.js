import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../images/logo.png';
import heroBanner from '../images/home.jpg'
import { NeflixButton } from '../styled/styledcomponents';
import { NeflixInput } from '../styled/styledcomponents';
import { useState } from 'react';
import SignUp from './SignUp';

const Login = () => {
    const classes = useStyles();
    const [signIn, setSignIn] = useState(true);

    return (
        <div className={classes.root}>
            <img src={logo} className={classes.logo} alt='logo' />
            <NeflixButton radius='5px' className={classes.session}>Iniciar Sesion</NeflixButton>

            <div className={classes.info}>
                {
                    signIn ? (
                     <SignUp />
                    ) : (
                        <>
                            <Typography variant="h4" gutterBottom>
                                Unlimited films, Tv programmes and more.
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Watch anywhere. Cancel at any time.
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Ready to watch ? Enter your email to create or restart membership.
                            </Typography>

                            <div className={classes.inputBlock}>
                                <NeflixInput placeholder='Email address' />
                                <NeflixButton radius='5px'> GET STARTED</NeflixButton>
                            </div>
                            </>
                  )
                }

            </div>
        </div>
            );
}


const useStyles = makeStyles((theme) => ({
                root : {
                position: 'relative',
            height: '100vh',
            backgroundImage: `url(${heroBanner})`,
            objectFit: 'contain',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems : 'center',
    },
            logo : {
                position: 'fixed',
            top: 0,
            left: 20,
            width: '150px',
            cursor: 'pointer',

    },session : {
                position: 'fixed',
            zIndex: 15,
            right:20,
            top: 20,
    },

            info: {
                color: '#fff',
            zIndex: 100,
            textAlign: 'center',
            '& h4': {
                fontWeight: 800,
        },
            '& h5': {
                fontWeight: 400,
        },
    },
  }));


            export default Login;