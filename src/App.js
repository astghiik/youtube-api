import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube';
import SelectedVideo from './components/SelectedVideo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import allReducers from './reducers';
import { receiveVideos } from './actions';
import thunk from 'redux-thunk';

// const store = createStore(videosReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // chrome redux devtools

const middleware = applyMiddleware(thunk, logger);
const store = createStore(allReducers, middleware);
console.log(store.getState())

store.subscribe(() => console.log('state changed', store.getState()));

class App extends Component {
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


  render() {
    return (
      <Provider store={store}>
        <div>
          <SearchBar handleFormSubmit={this.handleSubmit}/>
          <VideoList/>
          <SelectedVideo/>
        </div>
      </Provider>
    )
  }
}


export default App;