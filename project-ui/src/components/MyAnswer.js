import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Post from "./Post";
import axios from "axios";
import QuestionService from "../service/QuestionService";
import AnswerService from "../service/AnswerService";
import AnswerPost from "./AnswerPost";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";

const MyAnswer = () => {
    // const { text } = useParams();
	const [loading, setLoading] = useState(true);
	const [answers, setAnswers] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await AnswerService.listMyAnswers();
				// console.log(response.data.data)
				setAnswers(response.data.data);
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
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
			
			<NavBar key="uniquevalue" />

            <blockquote class="text-xl ml-32 mt-8 font-semibold italic text-left text-slate-900">
				My Answers:
				{/* <span class="mx-1 px-2 bg-purple-300 relative inline-block ">
					<span class="relative text-white">{text}</span>
				</span> */}
				
			</blockquote>

			{!loading && <AnswerPost answers={answers} />}
		</div>
	);
}

export default MyAnswer