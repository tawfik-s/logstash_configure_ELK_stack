var log4js = require("log4js");
console.log("1");
log4js.configure({
    appenders: {
        logstash: {
            type: '@log4js-node/logstashudp',
            host: '0.0.0.0', //'log.server',
            port: 12345
            // ,extraDataProvider: loggingEvent => ({
            //     host: 'anotherHostname', // this will replace the default real host
            //     clientIp: '1.2.3.4', // this will be added
            //     fields: {
            //         tag: 'myTag', // this will be added to the fields
            //         pid: loggingEvent.pid, // this will be added to the fields
            //         cheese: 'defaultCheese' // this will be added to the fields but will not be replaced in this example
            //     }
            // })
        }
    },
    categories: {
        default: { appenders: ['logstash'], level: 'info' }
    }
});
// var logger = log4js.getLogger();
// logger.level = "debug";
// logger.debug("Some debug messages");
console.log("2");
const logger = log4js.getLogger();
console.log("3");
logger.info("important log message", { cheese: 'gouda', biscuits: 'hobnob' });
console.log("4");

