import React, { Component } from 'react'
import Character from './Character'

class CharacterContainer extends Component {
    getInitialProps(){}
    render() {
        console.log(this.props.characters)
        if(this.props.character !== null){
        return (
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                {this.props.characters.map(character => <Character character = {character}/>)}
            </div>
        )}else{
            return ""
        }
    }
}
export default CharacterContainer