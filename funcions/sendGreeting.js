import { fetchWeatherFromIP } from "../apiRequests.js";

export default async (req, res, next) => {
	const name = req.query?.visitor_name;
	const client_ip =
		req.headers["x-real-ip"] || req.socket.remoteAddress.split(7);

	if (!name) next(new Error("Please input a visitor_name parameter"));
	try {
		const data = await fetchWeatherFromIP(client_ip);
		const location = data.location.region;
		const greeting = `Hello, ${name}, the temperature is ${data.current.temp_c}  degrees Celsius in ${location}`;
		res.status(200).json({
			client_ip,
			location,
			greeting,
		});
	} catch (err) {
		next(err);
	}
};
