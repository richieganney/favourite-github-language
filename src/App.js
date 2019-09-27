import React from 'react';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App" id="userInstructions">
      <h1 style={h1Style}>Enter a Github <span style={spanStyle}>username</span> to find their favourite language</h1>
      <SearchBar />
    </div>
  );
}

const h1Style = {
    font: '48px montserrat-bold, sans-serif',
    color: '#14153F',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    bottom: '100px'
}

const spanStyle = {
  color: '#FF00A4'
}
export default App;
