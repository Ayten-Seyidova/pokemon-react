import { Component } from "react";
import CardStyle from './Card.module.css'

export class Card extends Component {



    render() {
        return (
            <div className="row">
                {this.props.data.map((pokemon, index) => (
                    <div className="col-3" key={`pokemon-${index}`}>
                        < div className={`card ${CardStyle.cardShadow}`}>
                            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id < 10 ? `00` + pokemon.id
                                : pokemon.id < 100 ? `0` + pokemon.id
                                    : pokemon.id}.png`} width={200} className={`m-auto d-block ${CardStyle.cardImg}`} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Type: {pokemon.type}</li>
                                <li className="list-group-item">EXP: {pokemon.base_experience}</li>
                            </ul>
                        </div >
                    </div>
                ))}
            </div>
        )
    }
}