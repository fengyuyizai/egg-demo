'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/get_activity_info', controller.activity.getActivityInfo)
  router.post('/user/register', controller.user.register)
  router.post('/user/get_user_info', controller.user.getUserInfo)
  router.post('/user/delete', controller.user.deleteUserInfo)
  router.post('/user/update', controller.user.updateUserInfo)
};
