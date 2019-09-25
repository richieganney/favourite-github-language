import React, { Component } from 'react';
import '../styles.css'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        username: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
      this.setState({ username: e.target.value });
      console.log(this.state.username)
    }

    render() {
        return (
            <div>
                <form id="search_bar" onSubmit={e => {this.onSubmit(e)}}>
                    <div className="search">
                        <input placeholder="Enter a github username" type="text" id="username_search_bar" className="round" value={this.state.username} onChange={this.onChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;