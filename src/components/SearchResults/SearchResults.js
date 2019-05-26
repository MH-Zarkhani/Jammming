import React, { Component } from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                {/* tracks of searchResults */}
                <TrackList  onAdd={this.props.onAdd} isRemoval={false} tracks={this.props.searchResults}/>
            </div>
        );
    }
}

export default SearchResults;