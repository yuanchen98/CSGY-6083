import logo from "./pics/NYU_Stacked_RGB_Color.png";
import "./App.css";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
	const navigate = useNavigate();
	const onSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		fetch("http://localhost:8080/api/user/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userId: formData.get("userId"),
				pwd: formData.get("password"),
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.code === 200) {
					navigate.push('/home');
				}
			})
			.catch((err) => err);
	};

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
        */}
			<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<div>
						<img className="mx-auto h-16 w-auto" src={logo} alt="Workflow" />
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h2>
						<p className="mt-2 text-center text-sm text-gray-700">
							<a
								href="#"
								className="font-medium text-purple-700 hover:text-purple-500"
							>
								let's start chatting
							</a>
						</p>
					</div>
					<form className="mt-8 space-y-6" onSubmit={onSubmit} method="POST">
						<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="userId-address" className="sr-only">
									userId address
								</label>
								<input
									id="userId-address"
									name="userId"
									type="userId"
									autoComplete="userId"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
									placeholder="userId address"
									// onFocus={onUserIdFocus}
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
									placeholder="Password"
									// onFocus={onPwdFocus}
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 text-purple-700 focus:ring-purple-500 border-gray-300 rounded"
								/>

								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-purple-700 hover:text-purple-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
							>
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<LockClosedIcon
										className="h-5 w-5 text-purple-500 group-hover:text-purple-400"
										aria-hidden="true"
									/>
								</span>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
