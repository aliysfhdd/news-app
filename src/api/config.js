import axios from 'axios'

const URI = "https://cors.bridged.cc/https://today.line.me/id/"

export const Axios = axios.create({
    baseURL : URI,
    headers:{
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Header' : '*'
    },
});


