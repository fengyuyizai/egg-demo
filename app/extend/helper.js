'use strict';



module.exports = {
    initMongoID(param) {
        const objectId = require('mongodb').ObjectID
        return objectId()
    }
};
