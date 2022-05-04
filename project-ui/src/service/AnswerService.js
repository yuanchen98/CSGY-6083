import axios from "axios";

// const ANSWER_BASE_URL = "http://localhost:8080/api/answer/"
const ANSWER_BASE_URL = "api/answer/"


class AnswerService{
    listAnswers(id){
        return axios.get(ANSWER_BASE_URL+`list/${id}`);
    }


}

export default new AnswerService();





