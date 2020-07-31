'use strict';

const Controller = require('egg').Controller

class User extends Controller {
    async register() {
        const { ctx } = this

        const { account } = ctx.request.body

        const time = (new Date()).getTime()
        
        const res = await ctx.model.Mongo.create({
            account,
            time
        })

        ctx.body = {
            error: 0,
            errstr: "",
            data: res
        }
    }

    async updateUserInfo() {
        const { ctx } = this

        const { id, account } = ctx.request.body
        const time = (new Date()).getTime()

        const res = await ctx.model.Mongo.updateOne({id}, {account, time})

        ctx.body = res
    }

    async getUserInfo() {
        const { ctx } = this

        const { account } = ctx.request.body

        const res = await ctx.model.Mongo.find({account}).exec()

        ctx.body = res
    }

    async deleteUserInfo() {
        const { ctx } = this

        const { id } = ctx.request.body

        console.log(id)

        const res  = await ctx.model.Mongo.deleteOne({id})

        ctx.body = res
    }
}

module.exports = User