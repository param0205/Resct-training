import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//import Sampleform from './Sampleform'
import ReactDOM from "react-dom"
import Department, {Office} from "./Components/Department";


class App extends React.Component
{
  state=
  { officeName:"Incture",
   show:true,
  deapartments:[
    {deptName:"HR", HOD:"ABC"},
    {deptName:"finance", HOD:"John"},
    {deptName:"Marketing", HOD:"Sam"},
  ],
};


  nameChanegeHanler=(e)=>{
       console.log(e.target.value);
       this.setState({...this.state,officeName:e.target.value},()=>this.someFunctio())
  }
  toggleDepts=() => {
      this.setState({...this.state,show :! this.state.show})
  }
   
  render(){

    let dept=null;
    if(this.state.show)
    {
      dept=this.state.deapartments.map((dept,index)=> <Department key={index} deptName={dept.deptName} HOD={dept.HOD}/>)
    }
    return(
      <div className='App'>
        <h1>Hello World</h1>
        <Office officeName={this.state.officeName} change={this.nameChanegeHanler}></Office>
         <button onClick={this.toggleDepts}>Toggle depts</button>
         {dept}
          


        {/* <Department deptName={this.state.deapartments[0].deptName} HOD={this.state.deapartments[0].HOD}/>
        <Department deptName={this.state.deapartments[1].deptName} HOD={this.state.deapartments[1].HOD}/>
        <Department deptName={this.state.deapartments[2].deptName} HOD={this.state.deapartments[2].HOD}/> */}
      </div>
    );
}
}

export default App;
