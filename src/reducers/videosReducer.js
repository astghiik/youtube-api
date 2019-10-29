import youtube from '../apis/youtube';

export const videosReducer = (state = {videos: []}, action) => {
    switch (action.type) {
        case "RECEIVE_VIDEOS":
            
                state = {...state, videos: action.payload};

                return state;
               

            default:
            return state;

    }
    
}