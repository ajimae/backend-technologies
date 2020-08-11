var app = require('./src/app');

var PORT = 5000;
var HOST = `0.0.0.0`

// app.listen(PORT, function(params) {
//   console.log(`server started on ${HOST}:${PORT}`);
// });


app.listen(PORT, HOST);
console.log(`server started on ${HOST}:${PORT}`);