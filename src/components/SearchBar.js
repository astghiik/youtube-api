import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import { getSearchTerm } from '../actions';
import { connect } from 'react-redux';



function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleChange = event => {
        setTerm(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.getSearchTerm(term);
        props.handleFormSubmit(term);
    }

    const goGoogle = () => {
        window.open(`https://www.google.com/search?q=${props.termFromSearchbar}`);
    }


    return (
        <div align="center">
            <img 
                src="http://pngimg.com/uploads/youtube/youtube_PNG13.png"
                alt="youtube logo"
                height="80"
                width="80"
            />
            <div>
                <form onSubmit={handleSubmit} style={{display:"inline"}}>
                    <TextField
                        align="left"
                        label="Search"
                        margin="dense"
                        variant="outlined"
                        onChange={handleChange}
                    />
                </form>
                <img
                    src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
                    alt="google logo"
                    heigth="30"
                    width="30"
                    style={{margin:"12px",cursor:"pointer"}}
                    onClick={goGoogle}
                />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        termFromSearchbar: state.termFromSearchbar
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ getSearchTerm }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);