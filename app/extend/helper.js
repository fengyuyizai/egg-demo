/**
 * @项目名称: workServer
 * @功能名称:
 * @文件名称: helper
 * @Date: 2020/5/18
 * @Author: liux
 * @Copyright（C）2020 「小赢科技」 Inc.   All rights reserved.
 * 注意：本内容仅限于「小赢科技」内部传阅，禁止外泄以及用于其他的商业目的。
 */
'use strict';
module.exports = {
  realType(o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
  },
  sleep(interval) {
    if (typeof interval !== 'number') {
      interval = 1;
    }
    return new Promise(resolve => {
      setTimeout(resolve, interval * 1000);
    });
  },
  async getLock(key, timeout = 60) {

    const lock = await this.app.redis.set(key, 1, 'EX', timeout, 'NX');

    if (!lock) {
      this.ctx.logger.info('获取redis锁失败：%j, key:%j', lock, key);
      return Promise.reject(lock);
    }
    return lock;
  },
  parse(value) {
    let re = '';
    try {
      re = JSON.parse(value);
    } catch (err) {
      re = value;
    }
    return re;
  },
  createOrderId() {
    // 生成随机数
    return Date.now() + '' + Math.floor((Math.random() * 1000000) + 1);
  },
  maskMobile(tel) {
    const t = String(tel).trim();
    if (!(/^1\d{10}$/.test(t))) {
      return tel;
    }
    return t.substr(0, 3) + '****' + t.substr(-4);
  },
};
