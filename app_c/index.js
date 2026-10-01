const express = require('express')
const app = express();

app.get('/', (req, res)=> {
	res,send("Hello People of the World!")
});
app.listen(8080, () => {
	console.log("Listing on port 8080");
});