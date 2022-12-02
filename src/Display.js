import { Component } from "react";

export default class Display extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.mob}</h2>
            </div>
        )
    }
}