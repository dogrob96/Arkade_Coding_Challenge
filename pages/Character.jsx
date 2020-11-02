import React, { Component } from 'react'

class Character extends Component {

    character = {};


    render() {
        console.log("CHARACTER:" + this.props)
        this.props.character;
        return (
            <div>
                <img src={this.props.character.thumbnail.path+"/portrait_medium."+this.props.character.thumbnail.extension}></img><br/>
                {this.props.character.name}
            </div>
        )
    }
}

export default Character