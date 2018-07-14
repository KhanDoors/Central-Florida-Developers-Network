const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cfdn")
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
}

//passport middleware
app.use(passport.initialize());

//passport config
require('./config/passport')(passport);


//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));


