import axios from 'axios'

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
const USER_API_LOGIN_URL = "http://localhost:8080/api/v1/logon"
class UserService {
isOnline=false;
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }
    registerUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }
    loginUser(user){
        return axios.post(USER_API_LOGIN_URL,user);
        this.isOnline=true;
    }
    logOutUser(user){
        return axios.delete(USER_API_LOGIN_URL);
        this.isOnline=false;
    }

    
}
export default new UserService()