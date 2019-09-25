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
                 <p style={pStyle}>{this.props.username}'s favourite language is: <span style={spanStyle}>{this.favourite(this.props.languages)}</span></p>
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

const pStyle = {
    font: '20px montserrat-bold, sans-serif',
    color: '#14153F',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
}

const spanStyle = {
    color: '#FF00A4'
  }

export default FavouriteLanguage;