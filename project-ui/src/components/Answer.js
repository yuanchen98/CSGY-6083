import React from "react";
import NavBar from "./NavBar";

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

	return (
		<div>
			<NavBar />
			<div>
				<h3>ID: {id}</h3>
			</div>
		</div>
	);
};

export default Answer;
