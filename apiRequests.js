const API_URL = "http://ip-api.com/json";
const fetchLocationFromIP = async function (ip) {
	const res = await fetch(`${API_URL}/${ip}`);

	const data = await res.json();
	console.log(data);
};

export { fetchLocationFromIP };
