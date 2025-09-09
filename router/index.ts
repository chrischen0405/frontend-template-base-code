import { Router } from "vue-router";
import EnvUtil from "../utils/env";

export function setupRouterGuards(router: Router) {
  // 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${EnvUtil.getAppTitle()}`
  }

  // 这里可以添加登录验证逻辑
  // const isAuthenticated = localStorage.getItem('token')
  // 
  // if (to.meta.requiresAuth && !isAuthenticated) {
  //   next('/login')
  //   return
  // }

  next()
})
  return router;
}