const http = require("http");
const PORT = 3000;

http.createServer(function (req, res) {
	res.write("testing write on reaaaaaaaas");
	res.end();
}).listen(PORT);

console.log("Server started on port " + PORT);

