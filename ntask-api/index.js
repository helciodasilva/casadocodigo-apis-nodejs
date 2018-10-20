
const express = require('express')
const consign = require('consign')
const PORT = 3000;

const app = express();

consign()
    .include("libs/config.js")
    .include("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);