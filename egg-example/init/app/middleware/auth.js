'use strict';

module.exports = () => {
  return async function auth(ctx, next) {
	  
  //   const exception = /(^\/$)|(^\/login.*)|(\/logstate)|(\/news)|(^\/news.*)|(^\/decrypt.*)/;
  //   if (!exception.test(ctx.request.url)) {
		// ctx.status = 401;
  //   } else {
       await next();
  //   }
  };
};