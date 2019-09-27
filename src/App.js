import React from 'react';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App" id="userInstructions">
      <h1 style={h1Style}>Enter a Github <span style={spanStyle}>username</span> to find their</h1>
      <h1 style={h1Style}>favourite language</h1>
      <SearchBar />
    </div>
  );
}

const h1Style = {
    fontFamily: 'montserrat',
    color: '#14153F',
    textAlign: 'left',
    fontWeight: 'bold',
    textIndent: '10px'
}

const spanStyle = {
  color: '#FF00A4'
}
export default App;
