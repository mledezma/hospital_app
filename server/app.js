const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({   // to support URL-encoded bodies
	extended: false
}));
app.use(express.static(path.join(__dirname, '../app')));

app.use('/appointments', require('./routers/appointments.routes'));
app.use('/departments', require('./routers/departments.routes'));
app.use('/', require('./routers/login.routes'));
app.use('/admin', require('./../admin/routers/admin.routes'));

app.listen(8080, () => console.log('App express listen in port: 8080'));