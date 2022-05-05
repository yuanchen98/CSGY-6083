import React, { useState , useEffect} from "react";
import avator from "../pics/avatar.png";
import NavBar from "./NavBar";
import Editable from "./Editable";
import UserService from "../service/UserService";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

	const [task, setTask] = useState("");

    const [user, setUsr] = useState();

    const [loading, setLoading] = useState(true);
	const [questions, setQuestions] = useState();

    useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await UserService.userProfile();
                // const responswAnswer= await AnswerService.listAnswers(id);
				// console.log(response.data.data);
                // console.log(responswAnswer.data.data);
                // setAnswers(responswAnswer.data.data);
				// setQuestions([response.data.data]);
                setUsr(response.data.data);
                setTask(response.data.data.profile);

			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		};
		fetchData();
	}, []);

	const onClick = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/api/user/updateProfile/", {
			credentials: "include",
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: `${task}`,
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.code === 200) {
					alert("Update profile success");
					navigate(`/profile/`, { refresh: Math.random() });
					window.location.reload();
				}
			})
			.catch((err) => err);
	};



	return (
		<div>
			<NavBar></NavBar>
			<div className="px-16 pt-8">
				<figure className="md:flex bg-purple-50 rounded-xl p-8 md:p-0 dark:bg-slate-800 justify-between">
					<div className="flex w-4/5">
                    <img
						className="w-64 md:rounded-none rounded-full"
						src={avator}
						alt=""
						width="full"
						height=""
					></img>
					{!loading && <div className="pt-6 md:p-8 text-center md:text-left space-y-4  w-2/3">
						<blockquote>
							<p className="text-lg font-medium tracking-wide">MY PROFILE</p>
						</blockquote>
						<figcaption className="font-medium">
							<div className="text-violet-600 dark:text-violet-600 text-lg">
								{user.username}
							</div>
							<div className="text-violet-400 dark:text-violet-400">
								Location: {user.location.city}, {user.location.state}, {user.location.country}
							</div>

							<div className="text-violet-400 dark:text-violet-400">
								User ID: {user.userId}
							</div>
						</figcaption>
						<blockquote className="h-16">
							{/* <p className="text-lg font-medium">
								“Tailwind CSS is the only framework that I've seen scale on
								large teams. It’s easy to customize, adapts to any design, and
								the build size is tiny.”
							</p> */}
							<div className="text-violet-600 dark:text-violet-600 text-lg font-medium">
								Description
							</div>
							<Editable
								className="text-violet-400 dark:text-violet-400 font-normal mt-1"
								text={task}
								placeholder="Description"
								type="input"
							>
								<textarea
									rows={2}
									className="bg-purple-50 ring-none border-purple-300 rounded text-lg p-0 w-full font-normal"
									type="text"
									name="task"
									placeholder="Description"
									value={task}
									onChange={(e) => setTask(e.target.value)}
								/>
							</Editable>
						</blockquote>
					</div>
                    }
                    </div>
					<div className="px-4 py-3 bg-purple-50 text-right sm:px-6">
						<button
							onClick={onClick}
							className="tracking-wider mt-52 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
						>
							UPDATE
						</button>
					</div>
				</figure>
			</div>
		</div>
	);
};

export default Profile;
