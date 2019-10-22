import React, { useState } from 'react';
import VideoItem from './VideoItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const VideoList = props => {
    const { videos, handleClickOpen } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
        

    const videoItems = videos.map(v => {
        return (
            // <Grid item xs key={v.id.videoId ? v.id.videoId : v.id.channelId}>
            //     <Paper style={{height: "100%"}}>
            //         <VideoItem video={v}/>
            //         {v.snippet.title}
            //     </Paper>
            // </Grid>

            <TableCell key={v.id.videoId ? v.id.videoId : v.id.channelId}  onClick={() => handleClickOpen(v)} align="center">
                <VideoItem video={v}/>
                {/* <Typography>{v.snippet.title}</Typography> */}
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

export default VideoList;