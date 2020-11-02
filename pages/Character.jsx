import React, { Component } from 'react'

class Character extends Component {

    character = {};


    render() {
        console.log("CHARACTER:" + this.props)
        this.props.character;
        return (
            <div style={{width:"33%",maxWidth:"33%",minWidth: "260px", alignContent: "center"}}>
                <img src={this.props.character.thumbnail.path+"/portrait_medium."+this.props.character.thumbnail.extension}></img><br/>
                {this.props.character.name}
            </div>
        )
    }
}

export default Character