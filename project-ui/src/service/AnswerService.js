import axios from "axios";

// const ANSWER_BASE_URL = "http://localhost:8080/api/answer/"
const ANSWER_BASE_URL = "http://localhost:3000/api/answer/"


class AnswerService{
    listAnswers(id){
        return axios.get(ANSWER_BASE_URL+`list/${id}`);
    }

    listMyAnswers(){
        return axios.get(ANSWER_BASE_URL+`listMyAnswer/`);
    }


}

export default new AnswerService();





