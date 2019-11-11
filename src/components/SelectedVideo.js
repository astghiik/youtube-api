import React from 'react';
import { closeVideo } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function SelectedVideo(props) {
  const { video, open, closeVideo } = props;
  const videoSrc = video ? `https://www.youtube.com/embed/${video.id.videoId}` : '';

  return (
    <Dialog maxWidth={false} onClose={closeVideo} aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>
        <iframe title={video ? video.snippet.title : ""} src={videoSrc} width="800px" height="500px"></iframe>
      </DialogContent>
    </Dialog>
  );
}

function mapStateToProps(state) {
  return {
    video: state.selectedVideoReducer.selectedVideo,
    open: state.selectedVideoReducer.openSelectedVideo
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({closeVideo}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(SelectedVideo);