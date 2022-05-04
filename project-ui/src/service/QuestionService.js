import axios from "axios";

// const QUESTION_BASE_URL = "http://localhost:8080/api/question/"
const QUESTION_BASE_URL = "api/question/"


class QuestionService{
    listAll(){
        return axios.get(QUESTION_BASE_URL+"listAll");
    }

    listOne(id){
        return axios.get(QUESTION_BASE_URL+`list/${id}`);
    }

    ListRelatedQuestions(text){
        return axios.get(QUESTION_BASE_URL+`listRelated/${text}`);
    }

}

export default new QuestionService();