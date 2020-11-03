import React, { Component } from 'react'

class Character extends Component {


    render() {
        console.log("CHARACTER:" + this.props)
        this.props.character =this.props.character || {thumbnail:{path:"",extension:""},name:""}
        if(this.props.character !== null){
        return (
            <div style={{width:"33%",maxWidth:"33%",minWidth: "260px", alignContent: "center"}}>
                <img src={this.props.character.thumbnail.path+"/portrait_medium."+this.props.character.thumbnail.extension}></img><br/>
                {this.props.character.name}
            </div>
        )}else{
            return ""
        }
    }
}

export default Character