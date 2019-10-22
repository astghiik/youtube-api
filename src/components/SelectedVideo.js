import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


function SelectedVideo(props) {
  const { video, open, handleClose } = props;
  console.log(video)
  const videoSrc = video ? `https://www.youtube.com/embed/${video.id.videoId}` : '';

  return (
    <Dialog maxWidth="false" onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>
        <iframe src={videoSrc} width="800px" height="500px"></iframe>
      </DialogContent>
    </Dialog>
  );
}

export default SelectedVideo;