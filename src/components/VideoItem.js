import React from 'react';

const VideoItem = props => {
    const { video } = props;
    console.log(video.snippet.thumbnails.medium.url)

    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt="as" />
        </div>
    )
}

export default VideoItem;