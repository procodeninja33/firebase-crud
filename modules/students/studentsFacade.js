'use strict';

const studentService = require('./studentsService');
const studentConstant = require('./studentsConstant');
const constant = require('../../utils/constant');
const mapperHandler = require('../../utils/mapperHandler');

let addStudent = (req) => {
    return studentService.addStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.addStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.addStudentError, error);
    })
}

let getStudent = (req) => {
    return studentService.getStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.getStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.getStudentError, error);
    })
}

let getAllStudent = (req) => {
    return studentService.getAllStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.getAllStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.getAllStudentError, error);
    })
}

let deleteStudent = (req) => {
    return studentService.deleteStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.deleteStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.deleteStudentError, error);
    })
}

let editStudent = (req) => {
    return studentService.editStudent(req).then((data) => {
        return mapperHandler.requestResponse(constant.CODE.ok, studentConstant.MESSAGE.editStudentSuccess, data);
    }, (error) => {
        return mapperHandler.requestResponse(constant.CODE.badrequest, studentConstant.MESSAGE.editStudentError, error);
    })
}

module.exports = {
    addStudent,
    getStudent,
    getAllStudent,
    deleteStudent,
    editStudent
}