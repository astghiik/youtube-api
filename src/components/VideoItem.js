import React from 'react';
import Typography from '@material-ui/core/Typography';


const VideoItem = props => {
    const { video } = props;

    return (
        <div style={{cursor: "pointer"}}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
            <Typography>
                {video.snippet.title}
                {video.id.channelId ?
                    <img 
                        src="https://image.flaticon.com/icons/png/512/49/49672.png" 
                        alt="channel logo"
                        height="19"
                        width="19"
                        style={{marginLeft: "12px"}}
                    />
                    // <InfoIcon/>
                     : null }
            </Typography>
        </div>
    )
}

export default VideoItem;