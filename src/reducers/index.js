import { combineReducers } from 'redux';
import { videos, selectedVideoReducer } from './videosReducer'

const allReducers = combineReducers({
    videos,
    selectedVideoReducer
})

export default allReducers;