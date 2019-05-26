import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends Component {

    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
//get playlistName from input    
    handleNameChange(e) {
        this.props.onNameChange(e.target.value.trim());
    }

    render() {
        return (
            <div className="Playlist">
                {/* playlistName */}
                <input onChange={this.handleNameChange} value={this.props.playlistName} />
                    {/* tracks of playlist */}
                    <TrackList onRemove={this.props.onRemove} isRemoval={true} tracks={this.props.playlistTracks} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;