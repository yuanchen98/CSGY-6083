import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
import LocationService from "../service/LocationService";

function Country() {
	const [country, setCountry] = useState([]);
	const [countryid, setCountryid] = useState("");
	const [states, setState] = useState([]);
	const [stateid, setStateid] = useState("");
    const [city, setCity] = useState([]);
	const [cityid, setCityid] = useState("");

	useEffect(() => {
		const getcountry = async () => {
			try {
				const getres = await LocationService.listCtys();
				console.log(getres.data.data);
				setCountry(await getres.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		getcountry();
	}, []);

	const handlecountry = (event) => {
		const getcoutryid = event.target.value;
		setCountryid(getcoutryid);
		event.preventDefault();
	};

	useEffect(() => {
		const getstate = async () => {
			const getst = await LocationService.listStates(countryid);
			console.log(getst.data.data);
			setState(await getst.data.data);
		};
		getstate();
	}, [countryid]);

	const handlestate = (event) => {
		const getstateid = event.target.value;
		setStateid(getstateid);
		event.preventDefault();
	};

    useEffect(() => {
		const getcity = async () => {
			const getci = await LocationService.listCities(countryid, stateid);
			console.log(getci.data.data);
			setCity(await getci.data.data);
		};
		getcity();
	}, [stateid, countryid]);

    const handlecity= (event) => {
		const getcityid = event.target.value;
		setCityid(getcityid);
		event.preventDefault();
	};

	return (
		<div className="content container">
			<div className="row">
				<div className="col-sm-12">
					<h5 className="mt-4 mb-4 fw-bold">Output {}</h5>

					<div className="row mb-3">
						<div className="form-group col-md-4">
							<label className="mb-2">Country</label>
							<select
								name="country"
								className="form-control"
								onChange={(e) => handlecountry(e)}
							>
								<option>--Select Country--</option>
								{country.map((getcon) => (
									<option key={getcon} value={getcon}>
										{" "}
										{getcon}
									</option>
								))}
							</select>
						</div>
						<div className="form-group col-md-4">
							<label className="mb-2">State</label>
							<select
								name="state"
								className="form-control"
								onChange={(e) => handlestate(e)}
							>
								<option>--Select State--</option>
								{states.map((st) => (
									<option key={st} value={st}>
										{st}
									</option>
								))}
							</select>
						</div>
                        <div className="form-group col-md-4">
							<label className="mb-2">City</label>
							<select
								name="city"
								className="form-control"
								onChange={(e) => handlecity(e)}
							>
								<option>--Select City--</option>
								{city.map((city) => (
									<option key={city.locationId} value={city.locationId}>
										{city.city}
									</option>
								))}
							</select>
						</div>

						<div className="form-group col-md-2 mt-4">
							<button className="btn btn-success mt-2">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Country;
