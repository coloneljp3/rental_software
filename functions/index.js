'use strict'
var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql2');
var conn = mysql.createConnection(process.env.DATABASE_URL);
var bodyParser = require('body-parser');
var serverless = require('serverless-http');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

