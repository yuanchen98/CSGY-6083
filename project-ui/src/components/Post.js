import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
// const questions = [
// 	{ title: "test1", body: "Í1" },
// 	{ title: "test2", body: "2" },
// 	{ title: "test3", body: "3" },
// 	{ title: "test4", body: "4" },
// ];

const Post = (props) => {
	const questions = props.questions;
	// console.log(questions);

	return (
		<div className="container mx-auto px-4 sm:px-3 md:px-5">
			{questions.map((question) => (
				<div
					className="rounded-xl shadow-lg mt-8 shadow-purple-100"
					key={question.questionId}
				>
					<div className="bg-white shadow overflow-hidden sm:rounded-lg">
						<div className="px-4 py-5 sm:px-6">
							<p className="max-w-2xl text-sm text-gray-500">
								{question.user.username}
							</p>
							<Link
								to={{ pathname: `/list/${question.questionId}` }}
								className="no-underline hover:underline hover:text-purple-700 hover:cursor-pointer mt-0.5 leading-6 font-medium text-gray-900 text-xl align-text-top"
							>
								{question.title}
							</Link>
							<p className="max-w-2xl text-sm text-gray-500 align-text-top">
								Posted{" "}
								{Math.floor(
									(new Date() - Date.parse(question.postTime)) /
										1000 /
										3600 /
										24
								)}{" "}
								days ago
							</p>
						</div>
						<div className="border-t border-gray-200">
							<dl>
								<div className="bg-purple-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">
										Category
									</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<Link
											className=" bg-purple-400 hover:bg-purple-300 text-white font-bold py-1 px-2 leading-4 rounded-full text-xs"
											to={{
												pathname: `/listCategoryQuestion/${question.subCategory.mainCategory.categoryId}`,
											}}
											key={question.subCategory.mainCategory.categoryId}
										>
											{question.subCategory.mainCategory.categoryName}
										</Link>
										<Link
											className=" bg-purple-300 hover:bg-purple-400 text-white font-bold py-1 px-2 leading-4 rounded-full text-xs ml-2"
											to={{
												pathname: `/listSubCategoryQuestion/${question.subCategory.subCategoryId}`,
											}}
											key={question.subCategory.subCategoryId}
										>
											{question.subCategory.subCategoryName}
										</Link>
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">Detail</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										{question.body}
									</dd>
								</div>
								{/* 
								<div className="bg-purple-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">
										Email address
									</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										margotfoster@example.com
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">
										Salary expectation
									</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										$120,000
									</dd>
								</div>
								<div className="bg-purple-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">About</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
										incididunt cillum culpa consequat. Excepteur qui ipsum
										aliquip consequat sint. Sit id mollit nulla mollit nostrud
										in ea officia proident. Irure nostrud pariatur mollit ad
										adipisicing reprehenderit deserunt qui eu.
									</dd>
								</div>
								<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt className="text-sm font-medium text-gray-500">
										Attachments
									</dt>
									<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
										<ul
											role="list"
											className="border border-gray-200 rounded-md divide-y divide-gray-200"
										>
											<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
												<div className="w-0 flex-1 flex items-center">
													<PaperClipIcon
														className="flex-shrink-0 h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
													<span className="ml-2 flex-1 w-0 truncate">
														resume_back_end_developer.pdf
													</span>
												</div>
												<div className="ml-4 flex-shrink-0">
													<a
														href="#"
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Download
													</a>
												</div>
											</li>
											<li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
												<div className="w-0 flex-1 flex items-center">
													<PaperClipIcon
														className="flex-shrink-0 h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
													<span className="ml-2 flex-1 w-0 truncate">
														coverletter_back_end_developer.pdf
													</span>
												</div>
												<div className="ml-4 flex-shrink-0">
													<a
														href="#"
														className="font-medium text-indigo-600 hover:text-indigo-500"
													>
														Download
													</a>
												</div>
											</li>
										</ul>
									</dd>
								</div> */}
							</dl>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Post;
