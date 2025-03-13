const express = require("express");
const router = express.Router();
const path = require("path");
const dotenv = require('dotenv')
dotenv.config();
const clientSessions = require('client-sessions');
const exhbs = require('express-handlebars');
const db = require("./config/db")

db();

