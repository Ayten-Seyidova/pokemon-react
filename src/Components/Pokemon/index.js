import { Component } from "react";
import { PlayerContent } from "../PlayerContent";
import pokemons from '../../pokemons.json'
import { Score } from "../Score";

export class Pokemon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemons: pokemons.pokemons,
            clicked: false,
            team1: [],
            team2: [],
            team1Score: 0,
            team2Score: 0,
            team1Point: 0,
            team2Point: 0,
        }
    }

    async startAttack() {
        this.setState({ clicked: true });
        let randomTeam1 = [];
        let randomTeam2 = [...this.state.pokemons];

        while (randomTeam1.length < randomTeam2.length) {
            let randomNum = Math.floor(Math.random() * randomTeam2.length)

            let randomDeletePlayer = randomTeam2.splice(randomNum, 1)[0];
            randomTeam1 = [...randomTeam1, randomDeletePlayer];
        }

        await this.setState({ team1: randomTeam1, team2: randomTeam2 });

        this.showScore();
    }

    showScore() {
        let team1Point = this.state.team1.reduce((sum, item) => sum + item.base_experience, 0);
        let team2Point = this.state.team2.reduce((sum, item) => sum + item.base_experience, 0);

        this.setState({ team1Point, team2Point });

        if (team1Point > team2Point) {
            this.setState({ team1Score: this.state.team1Score + 1 })
        } else {
            this.setState({ team2Score: this.state.team2Score + 1 })
        }
    }

    render() {
        return (
            <div className="container text-center mb-5">
                <h1 className="mt-4">POKEDEX</h1>
                <button onClick={() => this.startAttack()} className="form-control btn btn-primary">Play</button>
                {
                    this.state.clicked &&
                    <><Score team1Score={this.state.team1Score} team2Score={this.state.team2Score} />
                        <PlayerContent textClass={this.state.team1Point > this.state.team2Point ? 'text-success' : 'text-danger'} text={this.state.team1Point > this.state.team2Point ? "Team1 won the game" : "Team1 lost the game"} point={this.state.team1Point} data={this.state.team1} />
                        <hr/>
                        <PlayerContent textClass={this.state.team1Point < this.state.team2Point ? 'text-success' : 'text-danger'} text={this.state.team1Point < this.state.team2Point ? "Team2 won the game" : "Team2 lost the game"} point={this.state.team2Point} data={this.state.team2} />
                    </>
                }
            </div>
        )
    }
}