'use strict';

///////////////// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();

///////////////// MIDDLEWARE
app.use('/', bodyParser.json());
app.use('/', cors());


// app.use('/', allowCrossDomain);

// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

///////////////// ENDPOINT DATA
var me = {
    fullName: "Brian Ng"
};

var location = {
    place: "New York, NY"
};

var hobbies = ["hiking", "scuba diving", "CrossFit"];

var occupations = ["UX Designer", "Consultant", "Camp Counselor"];

var skills = [{
    id: 1,
    name: 'Javascript',
    experience: 'Intermediate'
}, {
    id: 2,
    name: 'Angular',
    experience: 'Expert'
}, {
    id: 3,
    name: 'Express',
    experience: 'Beginner'
}, {
    id: 4,
    name: 'HTML/CSS',
    experience: 'Intermediate'
}];

///////////////// GET REQUESTS
app.get('/api/name', function(req, res) {
    res.json({me: me});
});

app.get('/api/location', function(req, res) {
    res.json({location: location});
});

app.get('/api/hobbies', function(req, res) {
    // console.log(req.query);
    if (req.query.order === "desc") {
        hobbies.sort();
    } else if (req.query.order === "asc") {
        hobbies.sort().reverse();
    }
    res.json({hobbies: hobbies});
});

app.get('/api/occupations', function(req, res) {
    if (req.query.order === "desc") {
        occupations.sort();
    } else if (req.query.order === "asc") {
        occupations.sort().reverse();
    }
    res.json({occupations: occupations});
});

app.get('/api/occupations/latest', function(req, res) {
    res.json({latestOccupation: occupations[occupations.length-1]});
});

app.get('/api/skills', function(req, res) {
    // console.log(req.query.experience);
    if (req.query.experience) {
        var result = [];
        for (var i = 0; i < skills.length; i++) {
            if (skills[i].experience.toUpperCase() === req.query.experience.toUpperCase()) {
                result.push(skills[i]);
            }
        }
        res.json({skills: result});
    }
    else {
        res.json({skills: skills});
    }
});

///////////////// PUT REQUESTS
app.put('/api/name/:id', function(req, res) {
    var newName = req.params.id;
    me.fullName = newName;
    res.send(me);
});

app.put('/api/location/:locationId', function(req, res) {
    var newLocation = req.params.locationId;
    location.place = newLocation;
    res.send(location);
});

///////////////// POST REQUESTS

app.post('/api/hobbies/:hobbyId', function(req, res) {
    var newHobby = req.params.hobbyId;
    hobbies.push(newHobby);
    res.send(hobbies);
});

app.post('/api/occupations/:occupationId', function(req, res) {
    var newOccupation = req.params.occupationId;
    occupations.push(newOccupation);
    res.send(occupations);
});

app.post('/api/skills', function(req, res){
    skills.push(req.body);
    res.send(skills);
});


var port = 8234;

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port: ' + port);
    }

});
