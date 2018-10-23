'use strict';

const Controller = require('egg').Controller;

class YordlesController extends Controller {
  async index() {
    const ctx = this.ctx;
    await ctx.renderClient('yordles/index.js', {
      message: 'Hello Yoldles.',
    });
  }
}

module.exports = YordlesController;
