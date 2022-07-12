import React from 'react';
import {FormControl,Input,InputLabel,Button} from '@material-ui/core';


const Form=()=>{
    const style={
                width:"30%",
                margin:"60px auto",
                background:'#efefef',
                padding:"60px 120px 80px 120px",
                textAlign:"center"
            };
   return(
    <div style={style}>
            <FormControl>
                <InputLabel htmlFor="my-input">Account Type</InputLabel>
                <Input aria-describedby="account type"></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Customer Name</InputLabel>
                <Input aria-describedby="Customer Name"></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Account Balance</InputLabel>
                <Input aria-describedby="account type"></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Branch Name</InputLabel>
                <Input aria-describedby="account type"></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">IFSC code</InputLabel>
                <Input aria-describedby="account type"></Input>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email id</InputLabel>
                <Input aria-describedby="account type"></Input>
            </FormControl>
             <div style={{height :"1rem"}}></div>
                <Button variant="contained" color="primary">Submit </Button>
             
        </div>
   );
}
export default Form; 
