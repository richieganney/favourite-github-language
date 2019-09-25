import React, { Component } from 'react';
import '../styles.css'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        username: ""
        };
    }

    render() {
        return (
            <div>
                <form id="search_bar">
                    <div className="search">
                        <input type="text" id="username_search_bar" className="round" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;