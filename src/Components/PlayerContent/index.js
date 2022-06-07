import { Component } from "react";
import { Card } from "../Card";

export class PlayerContent extends Component {
    render() {
        return (
            <>
                <h1 className={this.props.textClass}>{this.props.text}</h1>
                <h2>Total experience : {this.props.point}</h2>
                <Card data={this.props.data} />
            </>
        )
    }
}