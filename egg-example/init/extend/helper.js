'use strict';
module.exports = {
    async signData() {
        return this.app.config.jwt.singar.data;
    },

    async getAccessToken() {
        let bearerToken = ctx.request.header.authorization;
        return bearerToken && bearerToken.replace("Bearer ", "");
    },

};