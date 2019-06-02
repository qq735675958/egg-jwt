/* eslint-disable */
'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class LoginController extends Controller {
  async index() {
    const ctx = this.ctx;
    const token = jwt.sign({
      user_id: 1,
      user_name: ctx.request.body.username
    }, ctx.app.config.jwt.secret, {
        expiresIn: '100s'
    });
    ctx.body = {
      token: token,
	  username:'123'
    };
    ctx.status = 200;
  }
}

module.exports = LoginController;