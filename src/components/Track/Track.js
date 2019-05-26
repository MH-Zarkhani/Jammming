import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
//add a track to playlist 
    addTrack() {
         this.props.onAdd(this.props.track);
    }
//remove a track from playlist
    removeTrack() {
         this.props.onRemove(this.props.track);
    }
// render tracks
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {
                    this.props.isRemoval ? <button onClick={this.removeTrack} className="Track-action">-</button>
                    : <button onClick={this.addTrack} className="Track-action">+</button>
                }
            </div>
        );
    }
}

export default Track;