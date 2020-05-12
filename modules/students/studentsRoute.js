'use strict';

const studentRoute = require('express').Router();
const studentFacade = require('./studentsFacade');
const responseHandler = require('../../utils/responseHandler');

studentRoute.route('/').post([], (req, res) => {
    studentFacade.addStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

studentRoute.route('/:id').get([], (req, res) => {
    studentFacade.getStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

studentRoute.route('/').get([], (req, res) => {
    studentFacade.getAllStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

studentRoute.route('/:id').delete([], (req, res) => {
    studentFacade.deleteStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

studentRoute.route('/:id').patch([], (req, res) => {
    studentFacade.editStudent(req).then((result) => {
        responseHandler.successResponse(res, result)
    }).catch((err) => {
        responseHandler.errorHandler(res, err);
    });
});

module.exports = studentRoute;