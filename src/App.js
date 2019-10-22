import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';
import SelectedVideo from './components/SelectedVideo';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    openSelectedVideo: false
  }

  handleSubmit = async termFromSearchBar => {
    // const response = await youtube.get('/search', {
    //   params: {
    //     q: termFromSearchBar
    //   }
    // })
    // this.setState({ videos: response.data.items });


    youtube.get('/search', {
        params: {
          q: termFromSearchBar
        }
      }).then((response) => {
        console.log(response);
        this.setState({ videos: response.data.items });
      }).catch(() => console.log("bad request"));
    
  }

  handleClickOpen = video => {
    this.setState({
      openSelectedVideo: true,
      selectedVideo: video
    });
  };

  handleClose = value => {
    this.setState({ openSelectedVideo: false });
  };

  render() {
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        <VideoList videos={this.state.videos} handleClickOpen={this.handleClickOpen}/>
        <SelectedVideo open={this.state.openSelectedVideo} video={this.state.selectedVideo} handleClose={this.handleClose}/>
      </div>
    )
  }
}

export default App;