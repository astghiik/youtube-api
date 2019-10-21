import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
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

  render() {
    return (
      <div>
        <SearchBar handleFormSubmit={this.handleSubmit}/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;