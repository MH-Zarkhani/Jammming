import React,{Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlsit';

class App extends Component {
  
  constructor(props) {
    super(props);
    //initial state
    this.state = {
      searchResults :[
        {id : 1, name : 'song 1', artist : 'mrArtist 1', album : 'album 1' },
        {id : 2, name : 'song 2', artist : 'mrArtist 2', album : 'album 2' },
        {id : 3, name : 'song 3', artist : 'mrArtist 3', album : 'album 3' }
      ],
      playlistName : 'New Playlist',
      playlistTracks : []
    }
    //binding methods
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
//update playlistname get name from user
  updatePlaylistName(name) {
    this.setState(oldState => (
    {
      ...oldState,playlistName : name    
    }
    ))
  }
//add track to playlisttracks and remove this track from searchResults
  addTrack(track) {
      this.setState(oldState => (
        {
          ...oldState,
          searchResults : oldState.searchResults.filter(result => {
            return result.id !== track.id
          }),
          playlistTracks : [...oldState.playlistTracks,track]
        }
      ))
  }
//remove track from playlisttrack and add this track to searchResults
  removeTrack(track) {
      this.setState(oldState => (
        {
          ...oldState,
          searchResults : [...oldState.searchResults,track] ,
          playlistTracks : oldState.playlistTracks.filter(playlist => {
             return playlist.id !== track.id 
          }) 
        }
      ))
  }
//render App Component
  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
           <SearchBar /> 
            <div className="App-playlist">
              {/* render searchResult */}
              <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
              {/* render playlistTracks  */}
              <Playlist playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack}  playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
