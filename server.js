var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var me = {
	fullName: "Brian Ng"
};

var location = {
	place: "New York, NY"
};

var hobbies = ["hiking", "scuba diving", "CrossFit"];

var occupations = ["UX Designer", "Consultant", "Camp Counselor"];

///////////////// GET REQUESTS
app.get('/name', function(req, res) {
    res.send(me);
});

app.get('/location', function(req, res) {
    res.send(location);
});

app.get('/hobbies', function(req, res) {
    console.log(req.query);
    if (req.query.order === "desc") {
    	hobbies.sort();
    }
    else if (req.query.order === "asc") {
		hobbies.sort().reverse();
    }
    res.send(hobbies);
});

app.get('/occupations', function(req, res) {
    if (req.query.order === "desc") {
    	occupations.sort();
    }
    else if (req.query.order === "asc") {
		occupations.sort().reverse();
    }
    res.send(occupations);
});

app.get('/occupations/latest', function(req, res) {
    res.send(occupations[0]);
});

///////////////// PUT REQUESTS
app.put('/name/:id', function(req, res){
    var newName = req.params.id;
    me.fullName = newName;
    res.send(me);
});

app.put('/location/:locationId', function(req, res){
    var newLocation = req.params.locationId;
    location.place = newLocation;
    res.send(location);
});

///////////////// POST REQUESTS

app.post('/hobbies/:hobbyId', function(req, res){
    var newHobby = req.params.hobbyId;
    hobbies.push(newHobby);
    res.send(hobbies);
});

app.post('/occupations/:occupationId', function(req, res){
    var newOccupation = req.params.occupationId;
    occupations.push(newOccupation);
    res.send(occupations);
});

app.listen(8234);














