import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';
import SelectedVideo from './components/SelectedVideo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { videosReducer } from './reducers/videosReducer';
import { getVideos, receiveVideos } from './actions';
import thunk from 'redux-thunk';

// const store = createStore(videosReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // chrome redux devtools

const middleware = applyMiddleware(thunk, logger);
const store = createStore(videosReducer, middleware);

store.subscribe(() => console.log('state changed', store.getState()));

class App extends Component {
  state = {
    selectedVideo: null,
    openSelectedVideo: false
  }

  handleSubmit = termFromSearchBar => {          
    store.dispatch(dispatch => {
      youtube.get('/search', {
          params: {
            q: termFromSearchBar
          }
        })
          .then(response => {
            console.log(response);
            dispatch(receiveVideos(response.data.items));
          })
          .catch(error => console.log(error.message));
    });
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
      <Provider store={store}>
        <div>
          <SearchBar handleFormSubmit={this.handleSubmit}/>
          <VideoList videos={this.state.videos} handleClickOpen={this.handleClickOpen}/>
          <SelectedVideo open={this.state.openSelectedVideo} video={this.state.selectedVideo} handleClose={this.handleClose}/>
        </div>
      </Provider>
    )
  }
}

export default App;