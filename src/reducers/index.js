import { combineReducers } from 'redux';
import { videos, selectedVideoReducer, searchbarReducer } from './videosReducer'

const allReducers = combineReducers({
    videos,
    selectedVideoReducer,
    termFromSearchbar: searchbarReducer
})

export default allReducers;