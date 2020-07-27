'use strict';

const Service = require('egg').Service

class Activity extends Service{
    async find(uid) {
        const user = {
            uid,
            name: '张三'
        }

        return user
    }
}

module.exports = Activity