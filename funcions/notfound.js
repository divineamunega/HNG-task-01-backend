export default (req, res) =>
	res.status(400).json({
		status: "fail",
		message: "The only route on this server is /api/hello",
	});
