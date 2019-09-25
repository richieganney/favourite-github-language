import React, { Component } from 'react';
import PropTypes from "prop-types";

class FavouriteLanguage extends Component {

    constructor(props) {
        super(props);
        this.favourite = this.favourite.bind(this);
    }

    favourite(languages){
        return languages.sort((a,b) =>
        languages.filter(v => v===a).length
        - languages.filter(v => v===b).length
        ).pop();
    }

    render() {
        if(this.props.languages.length !== 0){
        return (
            <div id="favouriteLanguage">
                 <h1>{this.props.username}'s favourite language is: {this.favourite(this.props.languages)}</h1>
            </div>
        );
    } else {
        return null
    }
}
}

FavouriteLanguage.propTypes = {
    languages: PropTypes.array,
    username: PropTypes.string
}

export default FavouriteLanguage;