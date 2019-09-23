const jwt = require('jsonwebtoken');

module.exports = (app) => {
  return async function (ctx, next) {
    const signData = await ctx.helper.signData();
    const exception = /(^\/$)|(^\/login.*)|(\/login)|(\/upload_module)/;
    if (exception.test(ctx.request.url)) {
      await next();
    } else {
      if (ctx.request.header['authorization']) {
        let token = ctx.request.header['authorization'].split(' ')[1];
        let decoded;

        //解码token
        try {
          decoded = jwt.verify(token, signData);
          if (token === ctx.session.token) {
            await next();
          } else {
            // 如果不是最新token，则代表用户在另一个机器上进行操作，需要用户重新登录保存最新token
            ctx.body = {
              status: 1,
              message: '您的账号已在其他机器登录'
            }
          }
        } catch (error) {
          console.log(error);
          ctx.status = 401;
          ctx.body = {
            status: 1,
            message: '您的登录状态已过期，请重新登录'
          }
        }
      } else {
        ctx.status = 401;
        ctx.body = {
          status: 1,
          message: '您还没有登录，请登陆后再进行操作'
        }
        return;
      }
    }
  }
};