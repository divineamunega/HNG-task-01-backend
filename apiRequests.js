//  https://api.weatherapi.com/v1/current.json?key=c7415bbfabab4dcc8c8140304240107&q=London&aqi=no

const API_URL = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "c7415bbfabab4dcc8c8140304240107";

const fetchWeatherFromIP = async function (ip) {
	try {
		const res = await fetch(`${API_URL}?key=${API_KEY}&q=${ip}&aqi=no`);
		const data = await res.json();
		return data;
	} catch (err) {
		throw new Error("Could Not get data.");
	}
};

export { fetchWeatherFromIP };
