'use strict';

///////////////// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();

///////////////// MIDDLEWARE
app.use('/', bodyParser.json());
app.use('/', cors());

///////////////// MIDDLEWARE to render all of our public files. Any files of the public folder will be rendered if you use them
app.use(express.static(__dirname + '/public'));

///////////////// Below is what CORS middleware replaces
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

var hobbies = ["Hiking", "Scuba Diving", "CrossFit"];

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
    res.json(me);
});

app.get('/api/location', function(req, res) {
    res.json(location);
});

app.get('/api/hobbies', function(req, res) {
    // console.log(req.query);
    if (req.query.order === "asc") {
        hobbies.sort();
    } else if (req.query.order === "desc") {
        hobbies.sort().reverse();
    }
    res.json(hobbies);
});

app.get('/api/occupations', function(req, res) {
    if (req.query.order === "asc") {
        occupations.sort();
    } else if (req.query.order === "desc") {
        occupations.sort().reverse();
    }
    res.json(occupations);
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
        res.json(result);
    }
    else {
        res.json(skills);
    }
});

///////////////// PUT REQUESTS (put data in JSON format)
app.put('/api/name', function(req, res) {
    me = req.body;
    res.json(me);
});

app.put('/api/location', function(req, res) {
    location = req.body;
    res.json(location);
});

///////////////// POST REQUESTS (post data in JSON format)

app.post('/api/hobbies', function(req, res) {
    hobbies.push(req.body.hobbies);
    res.json(hobbies);
});

app.post('/api/occupations', function(req, res) {
    occupations.push(req.body.occupations);
    res.json(occupations);
});

app.post('/api/skills', function(req, res){
    skills.push(req.body.skills);
    res.json({skills: skills});
});


var port = 8234;

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port: ' + port);
    }

});
