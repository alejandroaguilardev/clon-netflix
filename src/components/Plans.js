import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setPrice } from '../features/PriceSlice';
import { NeflixButton } from '../styled/styledcomponents';

const Plans = ({cost,children, color, wide}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (cost) =>{
        dispatch(setPrice(cost));
        navigate('checkout')
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.standard} variant='h5'>
                {children} <br /> {cost}$
            </Typography>
            <NeflixButton 
            color ={color} 
            wide ={wide}
            onClick={()=>handleClick(cost)}>Subscribe</NeflixButton>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& button': {
            marginBottom: theme.spacing(2),
        }, 
    },
    standard: {
        fontSize: '1.2rem',

    }
  }));

export default Plans