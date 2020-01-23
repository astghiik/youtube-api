export const searchbarReducer = (state = '', action) => {
    switch (action.type) {
        case "TERM_FROM_SEARCHBAR":
            return action.payload;
        default:
            return state;
    }
}

export const videos = (state = [], action) => {
    switch (action.type) {
        case "RECEIVE_VIDEOS":   
            const triplets = [];
            for (let i = 0; i < action.payload.length - 2; i += 3) {
                triplets.push([action.payload[i], action.payload[i + 1], action.payload[i + 2]]);
            }
            return triplets;
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