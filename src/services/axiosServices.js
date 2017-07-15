import axios from 'axios'

export function handlePost(obj) {
    return axios.post('https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyCFXytgp5px0Q-xJ_zmdYtGJHFfQlmSFtk', obj)
}