import express from "express";
const app = express();
import { fetchLocationFromIP } from "./apiRequests.js";

const hello = function (req, res) {
	console.log("Hello I'm here");
	console.log(req.ip);
	fetchLocationFromIP(req.ip);
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
app.listen(3000, () => {
	console.log("Server Started on port 3000");
});
