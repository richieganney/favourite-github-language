import React, { Component } from 'react';
import '../styles.css'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form id="search_bar">
                    <div class="search">
                        <input type="text" id="username_search_bar" class="round" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;