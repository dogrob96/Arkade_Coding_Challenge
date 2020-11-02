import React, { Component } from 'react'
import Character from './Character'

class CharacterContainer extends Component {
    render() {
        console.log(this.props.characters)
        return (
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                {this.props.characters.map(character => <Character character = {character}/>)}
            </div>
        )
    }
}
export default CharacterContainer