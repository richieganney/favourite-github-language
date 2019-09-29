import React, { Component } from 'react';
import axios from 'axios';
import '../styles.css'
import FavouriteLanguage from './FavouriteLanguage';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        username: "",
        languages: []
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getRepoLanguages = this.getRepoLanguages.bind(this);
    }

    onChange(e){
      this.setState({ username: e.target.value });
    }

    getRepoLanguages(response){
        return response.data.map(function(repoObject){
            return repoObject.language
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
        let url = process.env.REACT_APP_API_KEY
        axios
          .get(url + `${this.state.username}/repos`)
          .then(response => {
            this.setState({ username: "", languages: this.getRepoLanguages(response) })
          })
          .catch(error => {
            this.setState({username: "", languages: ["That username is invalid, please try again"]})
            console.log(error.response);
          });
    }

    render() {
        return (
            <div>
                <form id="form" className="container" onSubmit={e => {this.onSubmit(e)}}>
                <input type="text" id="usernameSearchBar" value={this.state.username} onChange={this.onChange}></input>
                <div className="search"></div>
                </form>
                <div>
                <FavouriteLanguage
                  languages={this.state.languages}
                 />
                </div>
            </div>
        );
    }
}

export const getRepoLanguages = (response) => {
    return response.data.map(function(repoObject){
        return repoObject.language
    })
}

export default SearchBar;
