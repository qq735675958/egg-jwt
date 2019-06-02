/* eslint-disable */
'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');
class userController extends Controller {
  async index() {
    const ctx = this.ctx;
	console.log("==============================")
	console.log(ctx.userId)
	// console.log(ctx.userId)
	const params = {
		age:123,
		alis:"胡宇"
	}
	   ctx.body = {
	    id:Object.assign(params,ctx.userId),
	   };

  }
}

module.exports = userController;