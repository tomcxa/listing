import React from 'react';
import PropTypes from 'prop-types'
import Listing from './components/Listing'
import './App.css';
import data from './data/etsy.json'

function App() {
    const items = data
    console.log(data)
    return (
        <div className="App">
            <Listing items={items}/>
        </div>
    );
}

App.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

App.defaultProps = {
    items: []
}

export default App;
