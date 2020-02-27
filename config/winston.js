'use strict';

var winston = require('winston');
// var logger = winston.createLogger;

var logger = winston.createLogger({
    level: 'verbose',
    prettyPrint: true,
    colorize: true,
    silent: false,
    timestamp: false
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};

module.exports = logger;
