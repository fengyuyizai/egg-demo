module.exports = option => {
    return async function status(ctx, next) {
        let { body } = ctx
            
        try {
            await next()
            
        } catch(err) {
            const status = err.status || 500

            switch (status) {
                case 422:
                    ctx.body = {
                        errcode: -1,
                        errstr: '参数错误'
                    }
                    err.status = 200
            }
        }
    }
}