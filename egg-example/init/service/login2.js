'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken')

class loginService extends Service {
    async index() {
        const ctx = this.ctx;
        const data = {
            msg: "hello world"
        }
        return data;
    }

    async login() {
        const ctx = this.ctx;
        const signData = this.app.config.jwt.singar.data;
        const { userName, pwd } = ctx.request.body;

        const token = jwt.sign({
            user_id: 1,
            userName: userName
        }, signData, { expiresIn: '30s' })
        ctx.session.token = token;
        const data = {
            token: token,
            userName: userName,
            role: [userName]
        }
        // console.log(this.app.config.jwt.singar.data);
        return data
    }

}

module.exports = loginService;