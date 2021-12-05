import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import logo from "../images/logo.png";

const Header = () => {
    const classes = useStyles();
    const navegate = useNavigate();
    const [show, setShow] = useState(false);

    const hideHeader = () => {
        setShow(false);
        if(window.scrollY >100){
            setShow(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hideHeader);
        return () => window.removeEventListener("scroll", hideHeader)
    }, []);

    return (
        <AppBar position = 'sticky' elevation = {0}  className={`${classes.root} ${show && classes.transparent}`}>
            <Toolbar className={classes.toolbar}>

                <IconButton onClick={() =>navegate('/')}>
                    <img src={logo} className={classes.logo} alt="logo" />
                </IconButton>

                <Avatar 
                variant ="square"  
                style={{cursor: 'pointer'}} 
                onClick={() => navegate('/profile')} 
                
                />
            </Toolbar>
        </AppBar>
    )
}


const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor: '#111',
        top:0,
        left:0,
        right:0,
    }, 
    toolbar: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    logo : {
        width : "100px",
        cursor : "pointer",
    }, 
    transparent:{
        backgroundColor:"transparent",
    }
  }));

export default Header
