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
      console.log(this.state.username)
    }

    getRepoLanguages(response){
        return response.data.map(function(repoObject){
            return repoObject.language
        })
    }

    onSubmit(e) {
        e.preventDefault();
        let gitHubAPI = `https://api.github.com/users/`
        axios
          .get(gitHubAPI + `${this.state.username}/repos`)
          .then(response => {
            this.setState({ username: "", languages: this.getRepoLanguages(response) })
            console.log(this.state.languages)
          })
          .catch(error => {
            console.log(error.response);
          });
    }

    render() {
        return (
            <div>
                <form id="form" className="container" onSubmit={e => {this.onSubmit(e)}}>
                <input type="text" id="username_search_bar" value={this.state.username} onChange={this.onChange}></input>
                <div className="search"></div>
                </form>
                <div>
                <FavouriteLanguage
                    languages={this.state.languages}
                    username={this.state.username} />
                </div>
            </div>
        );
    }
}

export default SearchBar;
