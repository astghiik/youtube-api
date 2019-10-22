import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleChange = event => {
        setTerm(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.handleFormSubmit(term);
    }


    return (
        <div align="center">
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG13.png" alt="youtube logo" height="80" width="80" />
            <form onSubmit={handleSubmit}>
                <TextField
                    align="left"
                    label="Search"
                    margin="dense"
                    variant="outlined"
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default SearchBar;