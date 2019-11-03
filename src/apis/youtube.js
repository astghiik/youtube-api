import axios from 'axios';

const KEY = 'AIzaSyCTADPrc3RvwkSSfkxatYxjNLcRmaVAoFg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 36,
        key: KEY
    }
})