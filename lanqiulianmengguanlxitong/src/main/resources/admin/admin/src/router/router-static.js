import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import qiudui from '@/views/modules/qiudui/list'
    import qiuduiCollection from '@/views/modules/qiuduiCollection/list'
    import qiuduiLiuyan from '@/views/modules/qiuduiLiuyan/list'
    import qiuyuan from '@/views/modules/qiuyuan/list'
    import qiuyuanCollection from '@/views/modules/qiuyuanCollection/list'
    import qiuyuanLiuyan from '@/views/modules/qiuyuanLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryQiudui from '@/views/modules/dictionaryQiudui/list'
    import dictionaryQiuduiCollection from '@/views/modules/dictionaryQiuduiCollection/list'
    import dictionaryQiuyuan from '@/views/modules/dictionaryQiuyuan/list'
    import dictionaryQiuyuanCollection from '@/views/modules/dictionaryQiuyuanCollection/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '篮球资讯类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryQiudui',
        name: '球队类型',
        component: dictionaryQiudui
    }
    ,{
        path: '/dictionaryQiuduiCollection',
        name: '收藏表类型',
        component: dictionaryQiuduiCollection
    }
    ,{
        path: '/dictionaryQiuyuan',
        name: '球员位置',
        component: dictionaryQiuyuan
    }
    ,{
        path: '/dictionaryQiuyuanCollection',
        name: '收藏表类型',
        component: dictionaryQiuyuanCollection
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '篮球资讯',
        component: gonggao
      }
    ,{
        path: '/qiudui',
        name: '球队',
        component: qiudui
      }
    ,{
        path: '/qiuduiCollection',
        name: '球队收藏',
        component: qiuduiCollection
      }
    ,{
        path: '/qiuduiLiuyan',
        name: '球队留言',
        component: qiuduiLiuyan
      }
    ,{
        path: '/qiuyuan',
        name: '球员',
        component: qiuyuan
      }
    ,{
        path: '/qiuyuanCollection',
        name: '球员收藏',
        component: qiuyuanCollection
      }
    ,{
        path: '/qiuyuanLiuyan',
        name: '球员留言',
        component: qiuyuanLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
