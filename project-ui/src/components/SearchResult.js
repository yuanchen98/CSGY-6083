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

const SearchResult = () => {
	const { text } = useParams();
	const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await QuestionService.ListRelatedQuestions(text);
				// console.log(response.data.data)
				setQuestions(response.data.data);
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
				Search Result for
				<span class="mx-1 px-1 bg-purple-300 relative inline-block">
					<span class="relative text-white">{text}</span>
				</span>
				
			</blockquote>

			{!loading && <Post questions={questions} />}
		</div>
	);
};

export default SearchResult;
