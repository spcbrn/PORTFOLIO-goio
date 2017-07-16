import axios from 'axios'
import {Trip} from './../trip'

export function handlePost(obj) {
    return axios.post(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=${Trip}`, obj)
}