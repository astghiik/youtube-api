import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
    const { videos } = props;

    const videoItems = videos.map(v => <VideoItem key={v.id.channelId} video={v}/>);
    
    return (
        <div>
            {videoItems}
        </div>
    )
}

export default VideoList;