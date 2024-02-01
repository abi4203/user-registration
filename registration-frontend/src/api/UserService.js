import axios from 'axios'

const USER_BASE_REST_API = 'http://localhost:8080/api/v1/users';

class UserService{

    createUser(user){
        return axios.post(USER_BASE_REST_API, user)
    }
}

export default new UserService();
