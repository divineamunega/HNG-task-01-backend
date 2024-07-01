import express from "express";
import notfound from "./funcions/notfound.js";
import sendGreeting from "./funcions/sendGreeting.js";

const app = express();

// Route for /api/hello
app.get("/api/hello", sendGreeting);

// Route For unknown requests
app.use("*", notfound);

app.use((err, req, res, next) => {
	res.status(400).json({ status: "fail", message: err.message });
});
export default app;
