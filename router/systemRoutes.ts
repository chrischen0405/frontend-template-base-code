import { RouteRecordRaw } from 'vue-router';

const systemRoutes: RouteRecordRaw[] = [
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
    path: '/settings',
    name: 'Settings',
    component: () => import('@b/components/common/PageTemplate.vue'),
    meta: {
      title: '系统设置'
    }
  }
]

export default systemRoutes;