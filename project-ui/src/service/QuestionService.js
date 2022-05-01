import axios from "axios";

const QUESTION_BASE_URL = "http://localhost:8080/api/question/"

class QuestionService{
    listAll(){
        return axios.get(QUESTION_BASE_URL+"listAll");
    }

    listOne(id){
        return axios.get(QUESTION_BASE_URL+`list/${id}`);
    }

    listAnswers(id){
        return axios.get(QUESTION_BASE_URL+`listAnswer/${id}`);
    }
}

export default new QuestionService();