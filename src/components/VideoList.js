import React, { useState } from 'react';
import VideoItem from './VideoItem';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

function VideoList(props) {
    const { videos, handleClickOpen } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClickVideo = video => {
        if (video.id.videoId) {
            handleClickOpen(video);
        } else {
            window.open(`https://www.youtube.com/channel/${video.id.channelId}`);
        }
    }
        

    const videoItems = videos.map(v => {
        return (
            // <Grid item xs key={v.id.videoId ? v.id.videoId : v.id.channelId}>
            //     <Paper style={{height: "100%"}}>
            //         <VideoItem video={v}/>
            //         {v.snippet.title}
            //     </Paper>
            // </Grid>

            <TableCell key={v.id.videoId ? v.id.videoId : v.id.channelId} onClick={() => handleClickVideo(v)} align="center">
                <VideoItem video={v}/>
            </TableCell>
        )
    });
    
    return (
        // <div>
        //     <Grid container justify="center" spacing={3}>
        //         {videoItems}
        //     </Grid>
        // </div>
        videos.length ? (
            <Paper>
                <div>
                    <Table
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <TableBody>
                            <TableRow>
                                {videoItems}
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={3}
                    labelRowsPerPage=""
                    rowsPerPageOptions={[]}
                    rowsPerPage={rowsPerPage * 3}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        ) : null
    )
}

export default VideoList;