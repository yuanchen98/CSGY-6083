import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Post from "./Post";
import axios from "axios";
import QuestionService from "../service/QuestionService";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

const CategoryQuestionResult = () => {
    const { ctgyId } = useParams();
	const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState();

	useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            try {
                const response = await QuestionService.ListCategoryQuestions(ctgyId);
                // console.log(response.data.data)
                setQuestions(response.data.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();  
		
	}, []);

	// async function getData() {
	// 	try {
	// 		const res = await axios.get(` listAll`);
	// 		setSub(res.data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	// useEffect(() => {
	// 	getData();
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<div>
			<NavBar key="uniquevalue"/>
			{!loading && (<Post questions = {questions}/>)}
		</div>
	);
};

export default CategoryQuestionResult;
