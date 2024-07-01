export default (req, res, next) => {
	const name = req.query?.visitor_name;
	console.log(req.socket.remoteAddress);
	if (!name) next(new Error("Please Input a visitor_name parameter"));
};
