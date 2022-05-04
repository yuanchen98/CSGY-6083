import axios from "axios";

// const QUESTION_BASE_URL = "http://localhost:8080/api/question/"
const QUESTION_BASE_URL = "http://localhost:3000/api/question/"


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

    ListCategoryQuestions(ctgyId){
        return axios.get(QUESTION_BASE_URL+`listCategory/${ctgyId}`);
    }

    ListSubCategoryQuestions(ctgyId){
        return axios.get(QUESTION_BASE_URL+`listSubCategory/${ctgyId}`);
    }

    ListMyQuestions(){
        return axios.get(QUESTION_BASE_URL+`listMyQuestion/`);
    }

}

export default new QuestionService();