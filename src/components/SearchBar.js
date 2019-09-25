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
        axios
          .get(`https://api.github.com/users/${this.state.username}/repos`)
          .then(response => {
            this.setState({ languages: this.getRepoLanguages(response) })
            console.log(this.state.languages)
          })
          .catch(error => {
            console.log(error.response);
          });
      }

    render() {
        return (
            <div>
                <form id="search_bar" onSubmit={e => {this.onSubmit(e)}}>
                    <div className="search">
                        <input placeholder="Enter a github username" type="text" id="username_search_bar" className="round" value={this.state.username} onChange={this.onChange} />
                    </div>
                    <div>
                        <FavouriteLanguage
                         languages={this.state.languages} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
