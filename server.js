import express from "express";
import { publicIpv4 } from "public-ip";
import { fetchLocationFromIP } from "./apiRequests.js";
const app = express();

const hello = async function (req, res) {
	const ip = await publicIpv4();
	const ip2 = res.ip;

	console.log(ip, ip2);
	if (JSON.stringify(req.query) === "{}") {
		res.status(200);
	}
	res.status(400).json(req.query);
};

app.get("/hello", hello);

// Route Handler For unkown requests
app.use("*", (_, res) => {
	res.status(404).json({
		status: "fail",
		message: "The only route on this server is /hello. :)",
	});
});

// Call the server
app.listen(process.env.PORT || 3000, () => {
	console.log("Server Started on port 3000");
});
