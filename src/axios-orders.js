import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://react-burger-1f294.firebaseio.com'
})

export default instance