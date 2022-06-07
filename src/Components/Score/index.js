import { Component } from "react";

export class Score extends Component {
    render() {
        return (
            <h2>Score: {this.props.team1Score + ` : ` + this.props.team2Score}</h2>
        )
    }
}