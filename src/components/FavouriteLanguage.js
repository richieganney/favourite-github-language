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
        let message = this.props.languages
        console.log(message[0])
        if(message[0] != null && message.length !== 0 && message[0] !== "That username is invalid, please try again"){
          return (
            <div id="favouriteLanguage1">
              <p style={pStyle}>If I could hazard a guess, their favourite language would be <span style={spanStyle}>{this.favourite(message)}</span></p>
            </div>
          )
        } else if(message[0] == null || message[0] === "That username is invalid, please try again"){
          return (
            <div id="favouriteLanguage2"><p style={pStyle}>{message[0]}</p></div>
          )
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