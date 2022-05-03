import React from "react";
import avator from "../pics/boxer.png"
import { Link, NavLink } from "react-router-dom";

const AnswerPost = (props) => {
	const answers = props.answers;
	// console.log(answers);

	return (
		<div className="container mx-auto px-4 sm:px-3 md:px-5 py-8">
			<ul className="space-y-8">
				{answers.map((answer) => (
					<li className="text-sm leading-6 " key={answer.answerId}>
						<figure className="relative flex flex-col-reverse bg-gradient-to-r from-violet-50 to-violet-100 shadow-sm rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
							<div className="mt-6 text-slate-700 dark:text-slate-300">
								<Link to={{ pathname: `/list/${answer.questions.questionId}`}}>Posted in "{answer.questions.title}"</Link>
							</div>
							<figcaption className="flex items-center space-x-4">
								<img
									src={avator}
									alt=""
									className="flex-none w-14 h-14 rounded-full object-cover"
									loading="lazy"
								/>
								<div className="flex-auto">
									<div className="text-base text-slate-900 font-semibold dark:text-slate-300">
										<a
											// href="https://twitter.com/ryanflorence/status/1187951799442886656"
											// tabIndex="0"
										>
											{answer.answerBody}
										</a>
									</div>
									<div className="mt-0.5">Posted by {answer.user.username}</div>
								</div>
							</figcaption>
						</figure>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AnswerPost;
