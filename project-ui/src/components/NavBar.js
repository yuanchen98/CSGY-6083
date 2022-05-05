import React, { useEffect, useState, useRef } from "react";
import { divideColor } from "tailwindcss/defaultTheme";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	SearchIcon,
	BellIcon,
	MenuIcon,
	XIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import logo from "../pics/NYU_Short_RGB_Color.png";
import avator from "../pics/avatar.png";
import axios from "axios";
import QuestionService from "../service/QuestionService";
import CategoryService from "../service/CategoryService";
import UserService from "../service/UserService";

const navigation = [
	{ name: "Dashboard", href: "/home", current: false },
	{ name: "My Questions", href: "/myQuestion", current: false },
	{ name: "My Answers", href: "/myAnswer", current: false },
	// { name: "Calendar", href: "/home", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const NavBar = () => {
	const navigate = useNavigate();
	const [res, setRes] = useState([]);
	const [text, setText] = useState("");
	const [suggest, setSuggest] = useState([]);

	const node = useRef();
	const [user, showText] = useState(false);

	const [maincategory, setMaincategory] = useState([]);
	const [maincategoryid, setMaincategoryId] = useState("");
	const [subcategory, setSubCategory] = useState([]);
	const [subcategoryid, setSubCategoryId] = useState("");

	const setShowText = (user) => {
		return showText(!user);
	};

	const clickOutside = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			console.log("clicked inside");
			return;
		}
		// outside click
		console.log("clicked outside scope");
		showText(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", clickOutside);

		// clean up function before running new effect
		return () => {
			document.removeEventListener("mousedown", clickOutside);
		};
	}, [user]);

	useEffect(() => {
		const loadResp = async () => {
			// console.log(text);
			try {
				const response = await QuestionService.ListRelatedQuestions(text);
				// console.log(response);
				setRes(response.data.data);
				// console.log(res);}
			} catch (error) {
                if(error.response.data.code){
                    navigate('/');
                };
				console.log(error);
			}
		};
		loadResp();
	}, [text]);

	console.log(res);

	const onChangeHandler = (text) => {
		setText(text);
		// console.log(res);
		// setSuggest(res);
		// console.log(suggest);
	};

	// console.log(suggest);

	// const [cityid, setCityid] = useState("");
	// console.log(props.cityid);

	useEffect(() => {
		const getCategory = async () => {
			try {
				const getres = await CategoryService.listMainCategory();
				console.log(getres.data.data);
				setMaincategory(await getres.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		getCategory();
	}, []);

	const handlecategory = (event) => {
		const getmaincategoryid = event.target.value;
		setMaincategoryId(getmaincategoryid);
		event.preventDefault();
	};

	useEffect(() => {
		const getsubcategory = async () => {
			try {
				const getst = await CategoryService.listSubCategory(maincategoryid);
				console.log(getst.data.data);
				setSubCategory(await getst.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		getsubcategory();
	}, [maincategoryid]);

	const handlesubcategory = (event) => {
		const getsubcategoryid = event.target.value;
		setSubCategoryId(getsubcategoryid);
		//props.setCtgy(subcategory[getsubcategoryid]);
		//props.setCategoryId(props.ctgy.subCategoryId);
		event.preventDefault();
	};

	//console.log(props.ctgy);
	//console.log(props.categoryId);

	return (
		<Disclosure as="nav" className="bg-purple-200">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-purple-700 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block lg:hidden h-8 w-auto"
										src={logo}
										alt="NYU CHAT"
									/>
									<img
										className="hidden lg:block h-8 w-auto"
										src={logo}
										alt="NYU CHAT"
									/>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													item.current
														? "bg-purple-700 text-white"
														: "text-purple-500 hover:bg-purple-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>

								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className=" bg-purple-200 inline-flex items-center justify-center rounded-md text-purple-700 hover:text-white hover:bg-purple-700 focus:outline-none focus:ring-2">
											<span className="text-purple-500 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
												Category
											</span>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											{maincategory.map((item) => (
												<Menu.Item>
													{({ active }) => (
														<Link
															key={item.categoryId}
															target="_blank"
															to={{
																pathname: `/listCategoryQuestion/${item.categoryId}`,
															}}
															className={classNames(
																active
																	? "bg-purple-100 hover:ring-2 hover:ring-pink-300 rounded-md ring-inset "
																	: "",
																"block px-4 py-2 text-sm text-purple-700 "
															)}
														>
															{item.categoryName}
														</Link>
													)}
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
								{/* <div>{text}</div> */}
								<div className="flex relative">
									<div
										className="containder flex-col align-top absolute z-10"
										ref={node}
										onClick={() => setShowText(user)}
									>
										<input
											onChange={(e) => onChangeHandler(e.target.value)}
											value={text}
											type="text"
											className="rounded-lg ml-10 py-2 text-sm font-medium h-9 w-60 bg-purple-100 focus:bg-purple-50 focus:border-purple-500 border-purple-300 focus:outline-none border-2"
										></input>
										{res && user && (
											<div className="ml-10 rounded-lg overflow-clip">
												{res.map((ress) => {
													{
														console.log(ress);
													}

													return (
														<div className="text-center bg-purple-50 text-purple-500 overflow-hidden">
															<div className="rounded-lg hover:ring-2 hover:ring-pink-300 hover:ring-inset py-1">
																<NavLink
																	target="_blank"
																	to={{ pathname: `/list/${ress.questionId}` }}
																	className="h-full"
																>
																	{ress.title}
																</NavLink>
															</div>
														</div>
													);
												})}
											</div>
										)}
									</div>

									<span className="align-middle absolute left-60 z-20">
										<div className="flex container">
											<Link
												target="_blank"
												to={{ pathname: `/listRelated/${text}` }}
												className="pl-2 w-6 h-9 text-purple-400 hover:text-purple-500"
											>
												<SearchIcon
													className="pt-2 w-6 h-7"
													aria-hidden="true"
												/>
											</Link>
										</div>
									</span>
								</div>
							</div>

							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="bg-purple-700 p-1 rounded-full text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									<div>
										<Menu.Button className="bg-purple-700 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-700 focus:ring-white">
											<span className="sr-only">Open user menu</span>
											<img
												className="h-8 w-8 rounded-full"
												src={avator}
												alt="YC"
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<Link
														to={{pathname: `/profile`}}
														className={classNames(
															active ? "bg-purple-100" : "",
															"block px-4 py-2 text-sm text-purple-700"
														)}
													>
														My Profile
													</Link>
												)}
											</Menu.Item>
											{/* <Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? "bg-purple-100" : "",
															"block px-4 py-2 text-sm text-purple-700"
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item> */}
											<Menu.Item>
												{({ active }) => (
													<Link
                                                        onClick={() => UserService.signOut()}
														to={{ pathname: `/` }}
														className={classNames(
															active ? "bg-purple-100" : "",
															"block px-4 py-2 text-sm text-purple-700"
														)}
													>
														Sign out
													</Link>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-purple-700 text-white"
											: "text-purple-500 hover:bg-purple-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
