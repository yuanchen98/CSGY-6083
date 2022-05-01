import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Post from "./Post";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import QuestionService from "../service/QuestionService";

const Answer = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await QuestionService.listOne(id);
				console.log(response.data.data);
				setQuestions([response.data.data]);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	return (
		<div>
			<NavBar />
			{!loading && <Post questions={questions} />}
		</div>
	);
};

export default Answer;
