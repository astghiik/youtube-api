export const receiveVideos = videos => {
    return {
        type: 'RECEIVE_VIDEOS',
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
