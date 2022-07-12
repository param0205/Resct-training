import React, {Component}from "react";


const department=(props)=>{
    console.log(props);
    return(
        <p>
            Department:{props.deptName} HOD:{props.HOD}{" "}
        </p>
    )
}
export class Office extends Component{
    render() {
        console.log(this.props)
        return(
            <div>
                <p>Office:{this.props.officeName}</p>
                <input type="text"  onChange={this.props.change} value={this.props.officeName}/>
            </div>
        );
    }
}

export default department;
