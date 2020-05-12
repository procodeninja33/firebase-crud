'use strict';

const studentRoute = require('../modules/students/studentsRoute');

module.exports = (app) => {

    app.use('/api/student', [studentRoute])
}