export default (req, res, next) => {
	const name = req.query?.visitor_name;
	const clinetIp = req.socket.remoteAddress;
	if (!name) next(new Error("Please Input a visitor_name parameter"));

	console.log(req.headers);

	res.status(200).json({
		message: "success",
		data: { clinetIp, req: req.headers["x-real-ip"] },
	});
};
