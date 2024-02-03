import axios from 'axios'

// const USER_BASE_REST_API = 'http://localhost:8080/api/v1/users';

class UserService{

    createUser(user){
        return axios.post('http://localhost:8080/api/v1/users/create', user);
    }

    checkUser(creds){
        console.log(creds);
        return axios.post('http://localhost:8080/api/v1/users/check', creds);
    }

    findUser(user){
        return axios.post('http://localhost:8080/api/v1/users/find',user);
    }

    findUserbyDept(user){
        return axios.post('http://localhost:8080/api/v1/users/findDept',user);
    }

    findUserbyCollege(user){
        return axios.post('http://localhost:8080/api/v1/users/findCollege',user);
    }

    findUserbyUsername(user){
        // console.log(user);
        return axios.post('http://localhost:8080/api/v1/users/findUsername',user);
    }

    findUserbyGender(user){
        return axios.post('http://localhost:8080/api/v1/users/findGender',user);
    }

    findUserbyLastName(user){
        return axios.post('http://localhost:8080/api/v1/users/findLastName',user);
    }

    findUserbyEmail(user){
        return axios.post('http://localhost:8080/api/v1/users/findEmail',user);
    }

    findUserbyPhone(user){
        return axios.post('http://localhost:8080/api/v1/users/findPhone',user);
    }

    findUserbyYear(user){
        return axios.post('http://localhost:8080/api/v1/users/findYear',user);
    }
}

export default new UserService();
