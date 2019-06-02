'use strict';
const jwt = require('jsonwebtoken');
module.exports = (option) => {
  return async function auth(ctx, next) {
		// 路由白名单
		const exception = /(^\/$)|(^\/login.*)|(\/logstate)|(\/news)|(^\/news.*)|(^\/decrypt.*)/;
		if(exception.test(ctx.request.url)){
			await next();
		}else{
			let bearerToken = ctx.headers.authorization,
		     decoded = null,
		     token = bearerToken && bearerToken.replace("Bearer ", "")
			try {
		     decoded = jwt.verify(token, ctx.app.config.jwt.secret);
				 if(decoded){
						ctx.userId = decoded.user_name;
				 }
				 await next();
			} catch (err) {
		     ctx.status = 401;
				 ctx.body = {
					 status:ctx.status,
					 errcode:1,
					 msg:"登录已过期",
					 
				 }
				 return
			}
		}
  };
};
