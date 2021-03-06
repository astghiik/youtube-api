export const getSearchTerm = term => {
    return {
        type: 'TERM_FROM_SEARCHBAR',
        payload: term
    }
}

export const receiveVideos = videos => {
    return {
        type: 'RECEIVE_VIDEOS',
        payload: videos
    }
}

export const videosToTriplets = videos => {
    return {
        type: 'TO_TRIPLETS',
        payload: videos
    }
}

export const selectVideo = video => {
    return {
        type: 'SELECT_VIDEO',
        payload: video
    }
}

export const closeVideo = video => {
    return {
        type: 'CLOSE_VIDEO',
        payload: video
    }
}
