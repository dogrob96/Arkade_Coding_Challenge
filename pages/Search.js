import React from "react"
import CharacterContainer from "./CharacterContainer"


class Search extends React.Component {

    state = {
      characters:[],
      searchTerm: ''
    }
  
    editSearchTerm = (e) => {
      this.setState({searchTerm: e.target.value})
      this.getCharacterlist()
    }
 

    getCharacterlist(){
        var url = "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith="+this.state.searchTerm+"&apikey=9b0165af6a506342c3bd182f6b0919fd"
        console.log(url)
        fetch(url)
        .then( (res) => {
            return res.json()
        })
        .then( (res) => {
            console.log(res)
            this.setState({characters: res.data.results})
            console.log(this.state)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    render(){
    return (
        <div style = {{textAlign: 'center'}}>
        <input type='text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a Character!' />
        <br></br>
        <h3>These are the Characters:</h3>
        <CharacterContainer characters = {this.state.characters}/>
        </div>
    );
    }
  }
  
  export default Search;