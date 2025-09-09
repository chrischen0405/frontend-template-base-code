import { Router } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import EnvUtil from "../utils/env";

export function setupRouterGuards(router: Router) {
  // 配置NProgress
  NProgress.configure({
    showSpinner: false, // 不显示加载图标
    speed: 300, // 动画速度
    trickleSpeed: 200 // 自动递增间隔
  });

  // 前置路由守卫
  router.beforeEach((to, from, next) => {
    // 开始进度条
    NProgress.start();

    // 设置页面标题
    if (to.meta.title) {
      document.title = `${to.meta.title} - ${EnvUtil.getAppTitle()}`
    }

    // 这里可以添加登录验证逻辑
    // const isAuthenticated = localStorage.getItem('token')
    // 
    // if (to.meta.requiresAuth && !isAuthenticated) {
    //   NProgress.done(); // 确保在跳转前结束进度条
    //   next('/login')
    //   return
    // }

    next()
  });

  // 后置路由守卫
  router.afterEach(() => {
    // 结束进度条
    NProgress.done();
  });

  return router;
}