import axios from "axios";

// const ANSWER_BASE_URL = "http://localhost:8080/api/answer/"
const USER_BASE_URL = "http://localhost:3000/api/user/"


class UserService{
    signOut(){
        return axios.get(USER_BASE_URL+`signOut/`);
    }

    // giveLike(answer){
    //     return axios.post(ANSWER_BASE_URL+`like/`,{answer});
    // }


}

export default new UserService();