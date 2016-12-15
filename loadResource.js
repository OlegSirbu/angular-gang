var AWS = require('aws-sdk');
var async = require('async');
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var mime = require('mime-types');
var rootSourceDir = path.join(__dirname, './dist');

var resourceBucket = 'test-ui';
var s3 = new AWS.S3({ region: 'eu-central-1' });

module.exports = function (cb) {
    async.waterfall([
        function (callback) {
            console.log('Discover files in dest directory');
            var i = 0;
            var keys = [];
            _.forEach(walkSync(rootSourceDir), function (value) {
                keys[i] = createFunc(value);
                i++;
            });
            callback(null, keys);
        },
        function (keys, callback) {
            console.log('Upload swagger-ui files');
            async.parallel(keys, function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, data);
                }
            });
        },
        function (data, callback) {
            console.log('Upload index.html file', data);
            var params = {
                Bucket: resourceBucket,
                Key: data.key,
                Body: data.body,
                ContentType: mime.lookup(data.key),
                ACL: 'public-read-write'
            };
            s3.putObject(params, function (err, data) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null);
                }
            });
        }
    ], function (err) {
        if (err) {
            cb(err);
        } else {

            cb(null);
        }
    });
};

var walkSync = function (dir, filelist) {
    var files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist = walkSync(dir + '/' + file, filelist);
        }
        else {
            filelist.push(dir + '/' + file);
        }
    });
    return filelist;
};

var createFunc = function (filePath) {
    return function (cb) {
        var key = _.replace(filePath, rootSourceDir, 'dist');
        
        async.waterfall([
            function (callback) {
                fs.readFile(filePath, function (err, data) {
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, data);
                    }
                });
            },
            function (body, callback) {
                var params = {
                    Bucket: resourceBucket,
                    Key: key,
                    Body: body,
                    ContentType: mime.lookup(key),
                    ACL: 'public-read'
                };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        callback(err);
                    }
                    else {
                        callback(null);
                    }
                });
            }
        ], function (err, results) {
            if (err) {
                cb(err);
            } else {
                cb(null);
            }
        });
    };
};


