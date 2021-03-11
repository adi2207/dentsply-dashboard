import './form.css';

import React, { useState, useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    padding: "5%",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    margin: "10% auto"
},
}));
const Form = () => {
    const classes = useStyles();

    const handleSubmit = e => {
        e.preventDefault();
    
        let data = { formInput };
        console.log(data);

      };

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            order_quantity: "",
            day: "",
            country: "",
            warehouse: ""
        }
      );

    const handleInput = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setFormInput({ [name]: newValue });
      };

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
            <Card className={classes.root} noValidate autoComplete="off">
                <TextField id="order_quantity" name="order_quantity" label="Order Quantity" variant="outlined" required onChange={handleInput} />
                <TextField id="day" name="day" label="Day" variant="outlined" required onChange={handleInput}/>
                <TextField id="country" name="country" label="Country" variant="outlined" onChange={handleInput} required/>
                <TextField id="warehouse" name="warehouse" label="Warehouse" variant="outlined" onChange={handleInput} required/>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Card>
            </form>
         </React.Fragment>

      
    )
}
export default Form;