var exec = require("cordova/exec");

var CLASS = "ThemeDetection";

exports.isAvailable = function (success, error) {
    return new Promise((resolve, reject) => {
        exec((success)=>{
            resolve(success);
        },
        (error)=> {
            reject(error)
        }, CLASS, "isAvailable", []);
    });
}

exports.isDarkModeEnabled = function (success, error) {
    return new Promise((resolve, reject) => {
        exec((success)=>{
            resolve(success);
        },
        (error)=> {
            reject(error)
        }, CLASS, "isDarkModeEnabled", []);
    });
}
