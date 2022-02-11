var exec = require("cordova/exec");

var CLASS = "ThemeDetection";

exports.isAvailable = function () {
    return new Promise((resolve, reject) => {
        exec((success)=>{
            resolve(success);
        },
        (error)=> {
            reject(error)
        }, CLASS, "isAvailable", []);
    });
}

exports.isDarkModeEnabled = function () {
    return new Promise((resolve, reject) => {
        exec((success)=>{
            resolve(success);
        },
        (error)=> {
            reject(error)
        }, CLASS, "isDarkModeEnabled", []);
    });
}
