const express = require('express');
const path = require('path');

const bodyParser = require("body-parser");


const appstart = require("./src");
const app = express();
const PORT = process.env.PORT || 3001;



app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Serve static files from the React app
app.use(appstart)

// Put all API endpoints under '/api'
// app.get('/api/passwords', (req, res) => {
//   const count = 5;

//   // Generate some passwords
//   const passwords = Array.from(Array(count).keys()).map(i =>
//     generatePassword(12, false)
//   )

//   // Return them as json
//   res.json(passwords);

//   console.log(`Sent ${count} passwords`);
// });

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});