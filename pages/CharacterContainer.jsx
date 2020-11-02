import React, { Component } from 'react'
import Character from './Character'

class CharacterContainer extends Component {
    render() {
        console.log(this.props.characters)
        return (
            <div>
                {this.props.characters.map(character => <Character character = {character}/>)}
            </div>
        )
    }
}
export default CharacterContainer