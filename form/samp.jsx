//import { render } from '@testing-library/react';
import React from 'react';
// import { useState } from 'react';
import { withRouter } from "react-router-dom";
// import {FormControl,Input,InputLabel,Button} from '@material-ui/core';
import Form from "./form";

class SampleForm extends React.Component
{
    constructor(props){
    super(props);
     this.handleChange=this.handleChange.bind(this);
    //  this.h=this.handleSubmit.bind(this);
    this.state={
        text:"New user!",
        payload:
        {
            accountType:"",
            customerName:"",
            accountBalance:"",
            emailId:"",
            branch:"",
            ifscCode:"",
            newCustomer:1
        }
      }; 
    }
      handleChange=(event,name)=>{
        var value=event.target.value;
        if(name==="accountType")
        this.setState({payload:{ accountType:value}});
        if(value==="customerName")
        this.setState({payload:{customerName:value}});
        if(value==="accountBalance")
        this.setState({payload:{accountBalance:value}});
        if(value==='emailId')
        this.setState({payload:{emailId:value}});
        if(value==="branch")
        this.setState({payload:{branch:value}});
        if(value==="ifscCode")
        this.setState({payload:{ifscCode:value}});

      }
    //   handleSubmit=()=>
    //   {

    //   }
     render() {
        return(
            <div>
             <Form/>
            </div>
        );
     }
   
     
    
}

export default withRouter(SampleForm); 
