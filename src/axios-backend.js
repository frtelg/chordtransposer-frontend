import axios from 'axios';

const backendUrl = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://chordtransposer-lb-1285596776.eu-central-1.elb.amazonaws.com'

const instance = axios.create({
    baseURL: backendUrl
});

export default instance;