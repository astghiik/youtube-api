export const videos = (state = [], action) => {
    switch (action.type) {
        case "RECEIVE_VIDEOS":
            return action.payload
        default:
            return state;
    }
}

export const selectedVideoReducer = (state = {openSelectedVideo: false}, action) => {
    switch (action.type) {
        case "SELECT_VIDEO":
            return state = {
                ...state,
                selectedVideo: action.payload,
                openSelectedVideo: true
            };
        case "CLOSE_VIDEO":
            return state = {
                ...state,
                openSelectedVideo: false
            }
        default:
            return state;
    }
}