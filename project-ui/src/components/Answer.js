import React from "react";
import NavBar from "./NavBar";
import React, { useEffect, useState } from "react";
import QuestionService from "../service/QuestionService";


const Answer = (props) => {
    const questions = props.questions;

	return (
        <NavBar />
    );
};

export default Answer;
