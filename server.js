'use strict';
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const os = require('os');
const networkInterfaces = os.networkInterfaces();

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running at http://${networkInterfaces.lo[0].address}:${process.env.PORT || 3000}`);
    require('./routes')(app);

});