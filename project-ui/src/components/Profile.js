import React, { useState } from "react";
import avator from "../pics/avatar.png";
import NavBar from "./NavBar";
import Editable from "./Editable";

const Profile = () => {
	const [task, setTask] = useState("");

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
					<div className="pt-6 md:p-8 text-center md:text-left space-y-4  w-2/3">
						<blockquote>
							<p className="text-lg font-medium tracking-wide">MY PROFILE</p>
						</blockquote>
						<figcaption className="font-medium">
							<div className="text-violet-600 dark:text-violet-600 text-lg">
								Sarah Dayan
							</div>
							<div className="text-violet-400 dark:text-violet-400">
								Location: Staff Engineer, Algolia
							</div>

							<div className="text-violet-400 dark:text-violet-400">
								User ID:
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
                    </div>
					<div className="px-4 py-3 bg-purple-50 text-right sm:px-6">
						<button
							type="submit"
							className="tracking-wider mt-52 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
						>
							POST
						</button>
					</div>
				</figure>
			</div>
		</div>
	);
};

export default Profile;
