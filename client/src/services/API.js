import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081`//dev
        //baseURL:'https://the-teacher.herokuapp.com'//prod
    })
}