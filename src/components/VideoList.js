import React, { useState } from 'react';
import VideoItem from './VideoItem';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { connect } from 'react-redux';

function VideoList(props) {
    const { videos, handleClickOpen } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(1);

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
        

    const cells = videos.map(v => {
        return (
            <TableCell key={v.id.videoId ? v.id.videoId : v.id.channelId} onClick={() => handleClickVideo(v)} align="center">
                <VideoItem video={v}/>
            </TableCell>
        )
    });

    const videoItems = [];
    for (let i = 0; i < cells.length - 2; i += 3) {
        videoItems.push(<TableRow>{[cells[i], cells[i + 1], cells[i + 2]]}</TableRow>);
    }
    
    return (
        videos.length ? (
            <Paper>
                <div>
                    <Table
                                // size={dense ? 'small' : 'medium'}

                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <TableBody> 
                            {videoItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    // component="div"
                    // count={videos.length}
                    // labelRowsPerPage="bla ba"
                    // rowsPerPageOptions={[1, 5]}
                    // rowsPerPage={rowsPerPage}
                    // page={page}
                    // backIconButtonProps={{
                    //     'aria-label': 'previous page',
                    // }}
                    // nextIconButtonProps={{
                    //     'aria-label': 'next page',
                    // }}
                    // onChangePage={handleChangePage}
                    // onChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPageOptions={[]}
          component="div"
          count={videos.length / 3}
          rowsPerPage={rowsPerPage}
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

function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps)(VideoList);