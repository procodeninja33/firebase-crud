'use strict';

const databaseRef = require('../../config/firebaseConfig').databaseRef;
const firebaseRef = require('../../config/firebaseConfig').firebaseRef;

let addStudent = async (req) => {
    const ref = databaseRef.ref('student');

    // let findQuery = await firebaseRef.collection('student').where('usr_email', '==', req.body.usr_email)

    // return findQuery.get().then((result) => {
    //     result.forEach(doc => {
    //         console.log(doc.id, ' => ', doc.data());
    //     });
    //     return result._query;
    // })

    const saveField = {
        usr_firstname: req.body.usr_firstname,
        usr_lastname: req.body.usr_lastname,
        usr_email: req.body.usr_email
    }

    return ref.push(saveField).then((pushResult) => {
        return pushResult;
    });
}

let getStudent = (req) => {
    const ref = databaseRef.ref(`student/${req.params.id}`);

    return ref.once('value').then((result) => {
        return result.val();
    });
}


let getAllStudent = (req) => {
    const ref = databaseRef.ref(`student`);

    return ref.once('value').then((result) => {
        return result.val();
    });
}

let deleteStudent = (req) => {
    const ref = databaseRef.ref(`student/${req.params.id}`);

    return ref.remove();
}

let editStudent = (req) => {
    const ref = databaseRef.ref(`student/${req.params.id}`);

    const updateField = {
        usr_firstname: req.body.usr_firstname,
        usr_lastname: req.body.usr_lastname,
    }

    return ref.update(updateField);
}


module.exports = {
    addStudent,
    getStudent,
    getAllStudent,
    deleteStudent,
    editStudent
}