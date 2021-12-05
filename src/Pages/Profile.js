import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import Plans from '../components/Plans';
import { auth } from '../firebase';
import AvatarPerfil from '../images/perfil.jpg';
import { NeflixButton } from '../styled/styledcomponents';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const signOut = () =>{
        auth.signOut();
        navigate('/login');

    }

    return (
        <div className = {classes.root}>
            <Header />
            <Typography variant='h3'>Edit Profile</Typography>
            <div className= {classes.info}>
                <img src={AvatarPerfil} alt ='Avatar' />
                <div className={classes.details} >
                    <div className={classes.plans} >
                        <Typography variant='h6'>Email Usuario</Typography>
                        <Typography className ={classes.borderText} variant='h5' gutterBottom>Plans</Typography>
                        <Plans cost={7.99}> Netflix Standard</Plans>
                        <Plans cost={11.99}> Netflix Basic</Plans>
                        <Plans color='gray'  wide='medium' cost={15.99}> Netflix Premium</Plans>
                        <NeflixButton 
                            wide='fullWidth' 
                            onClick={signOut}> 
                            Sign Out
                        </NeflixButton>

                    </div>
                </div>
            </div>
            
        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    root : {
        color: '#fff',
        minHeight: '100vh',
        width :'100vw',   
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    info: {
        width: '80%',
        display: 'flex',
        '& img' : {
            width : '100px',
            height : '100px',
            [theme.breakpoints.down("sm")] :{
                display: 'none',
            }
        },
    }, 
    details : {
        width : '100%',
        marginLeft : theme.spacing(3),
        '& h6' : {
            backgroundColor: '#aaa',
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            fontSize: '18px',
        }
    },
    plans: {
        width: '100%',
    },
    borderText:  {
        borderBottom: '1px solid lightgray',
    }

  }));


export default Profile;