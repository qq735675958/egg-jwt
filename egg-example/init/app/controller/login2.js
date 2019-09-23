'use strict';
const Controller = require('egg').Controller;

class loginController extends Controller {

    async index() {
        const data = await this.service.login.index();
        this.ctx.body = data;
    }

    async login() {
        const data = await this.service.login.login();
        this.ctx.body = data;
    }
}

module.exports = loginController;

