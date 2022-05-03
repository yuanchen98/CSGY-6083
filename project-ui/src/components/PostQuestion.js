import React, { useState, useEffect } from "react";
import CaDrop from "./CaDrop";

const PostQuestion = () => {
	const [categoryId, setCategoryId] = useState("");

	return (
		<div className="px-48 pt-6 ">
			<div className="container shadow-lg shadow-purple-100 px-8 py-8 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl">
				<div>
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Post My Question
								</h3>
								<p className="mt-1 text-sm text-gray-600">
									NYU CHAT - Beyond just chatting
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<form action="#" method="POST">
								<div className="shadow sm:rounded-md sm:overflow-hidden">
									<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
										<div className="grid grid-cols-3 gap-6">
											<div className="col-span-3 sm:col-span-2">
												<label className="block text-sm font-medium text-gray-700">
													Title
												</label>
												<div className="mt-1 flex">
													<input
														type="text"
														name="title"
														id="title"
														className="rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 flex-1 block w-full sm:text-sm border-gray-300"
														placeholder="Title"
													/>
												</div>
											</div>
										</div>

										<div>
											<label
												htmlFor="about"
												className="block text-sm font-medium text-gray-700"
											>
												About
											</label>
											<div className="mt-1">
												<textarea
													id="detail"
													name="detail"
													rows={3}
													className="shadow-sm focus:ring-purple-500 focus:border-purple-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
													placeholder="Please provide detail description of your question"
													defaultValue={""}
												/>
											</div>
										</div>
									</div>
									<div>
										<CaDrop
											categoryId={categoryId}
											setCategoryId={setCategoryId}
										></CaDrop>
									</div>
									<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
										<button
											type="submit"
											className="tracking-wider inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
										>
											POST
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostQuestion;
