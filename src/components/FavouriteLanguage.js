import React, { Component } from 'react';
import PropTypes from "prop-types";

class FavouriteLanguage extends Component {

    mode(languages){
        return languages.sort((a,b) =>
        languages.filter(v => v===a).length
        - languages.filter(v => v===b).length
        ).pop();
    }

    render() {
        if(this.props.languages.length !== 0){
        return (
            <div id="favouriteLanguage">
                 <h1>Users favourite language is: {this.mode(this.props.languages)}</h1>
            </div>
        );
    } else {
        return null
    }
}
}

FavouriteLanguage.propTypes = {
    languages: PropTypes.array
}

export default FavouriteLanguage;