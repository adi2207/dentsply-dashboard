import './form.css';

import React, { useState, useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    padding: "1%",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    margin: "auto"
},
formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Form = (props) => {
    
    const classes = useStyles();

    const [country, setCountry]= useState('');
    const [product, setProduct]= useState('');

    const handleSubmit = e => {
        e.preventDefault();
    
        let data = { formInput };
        props.onPredict(data);

      };

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            order_quantity: "",
            day: "",
            country: "",
            product: ""
        }
      );

    const handleInput = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setFormInput({ [name]: newValue });
      };

      const handleProductInput = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setProduct(newValue);
        setFormInput({ [name]: newValue });
      };  
      
      const handleCountryInput = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setCountry(newValue);
        setFormInput({ [name]: newValue });
      };

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
            <Card className={classes.root} noValidate autoComplete="off">
                <TextField id="order_quantity" name="order_quantity" label="Order Quantity" variant="outlined" onChange={handleInput} />
                <TextField id="day" name="day" label="Day" variant="outlined" onChange={handleInput}/>
                {/* <TextField id="product" name="product" label="Product" variant="outlined" required onChange={handleInput}/> */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Product</InputLabel>
                    <Select
                        native
                        name="product"
                        value={product}
                        onChange={handleProductInput}
                        label="Product"
                        inputProps={{
                            name: 'product',
                            id: 'product',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="product1">Product 1</option>
                    </Select>
                </FormControl>
                {/* <TextField id="country" name="country" label="Country" variant="outlined" onChange={handleInput} required/> */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
                    <Select
                        native
                        name="country"
                        value={country}
                        onChange={handleCountryInput}
                        label="Country"
                        inputProps={{
                            name: 'country',
                            id: 'country',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="us">US</option>
                    </Select>
                </FormControl>
                {/* <TextField id="warehouse" name="warehouse" label="Warehouse" variant="outlined" onChange={handleInput} required/> */}
                <Button type="submit" variant="contained" color="primary">
                    Predict
                </Button>
            </Card>
            </form>
         </React.Fragment>

      
    )
}
export default Form;