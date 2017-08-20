// const ObjectID = require('mongodb').ObjectID;
// const db = require('../db');

module.exports = {
    render,
    chooseUser
};

function render(req, res) {
    res.sendFile('/index.html');
}

function chooseUser(req, res) {
    switch(req.body.user) {
        case 'Admin':
            console.log('Hi, a doctor');
            res.redirect('/admin.html');
            res.end();      
            break;
        case 'Patient':
            console.log('Hi, im patient');
            res.redirect('/patient.html');
            break;
        default:
            throw Error('Not an allowed user');
    }
}