'use strict';

const Controller = require('egg').Controller

class Activity extends Controller {
    async getActivityInfo() {
        const { ctx } = this
        const { uid } = ctx.request.body;

        ctx.validate({
            uid: {type: 'string', require: true, desc: '用户id'}
        })

        ctx.logger.info('some request data req : %j', ctx.request.body);
        const result = await ctx.service.getActivity.find(uid);
        ctx.logger.info('some request data res : %j', result);

        ctx.body = result
    }
}

module.exports = Activity