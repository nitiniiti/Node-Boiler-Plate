'use strict';

/**
 * Module dependencies.
 */
var jwt = require('jsonwebtoken');
var validator = require('validator');
var config = require('config/config');
var db = require('config/sequelize');
var logger = require('config/winston');
var userModel = require('app/models/user');

var apiFunctions = {
    authenticate: (req, res) => {
        res.status(200).jsonp({ info: 'This is authenticate' });
    }
}
module.exports = apiFunctions