import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@b/pages/Login/index.vue'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  },
  {
    path: '/',
    component: () => import('@b/components/layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@b/pages/Dashboard/index.vue'),
        meta: {
          title: '仪表板'
        }
      },
      {
        path: '/users/list',
        name: 'UserList',
        component: () => import('@b/pages/User/List.vue'),
        meta: {
          title: '用户列表'
        }
      },
      {
        path: '/users/roles',
        name: 'UserRoles',
        component: () => import('@b/components/common/PageTemplate.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/content/articles',
        name: 'Articles',
        component: () => import('@b/components/common/PageTemplate.vue'),
        meta: {
          title: '文章管理'
        }
      },
      {
        path: '/content/categories',
        name: 'Categories',
        component: () => import('@b/components/common/PageTemplate.vue'),
        meta: {
          title: '分类管理'
        }
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@b/components/common/PageTemplate.vue'),
        meta: {
          title: '系统设置'
        }
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - Frontend Template`
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

export default router