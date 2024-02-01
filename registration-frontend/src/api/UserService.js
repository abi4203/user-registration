import axios from 'axios'

const USER_BASE_REST_API = 'http://localhost:8080/api/v1/users';

class UserService{

    createUser(user){
        return axios.post('http://localhost:8080/api/v1/users/create', user)
    }

    checkUser(creds){
        return axios.post('http://localhost:8080/api/v1/users/check', creds)
    }
}

export default new UserService();
