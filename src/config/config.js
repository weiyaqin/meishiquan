  const Yindao=resolve => require(['../components/Yindao'],resolve);
  const login=resolve => require(['../components/login'],resolve);
  const home=resolve => require(['../components/home'],resolve);
  const list=resolve => require(['../components/list'],resolve);
  const index1=resolve => require(['../components/index1'],resolve);
  const order=resolve => require(['../components/order'],resolve);
  const hotmenu=resolve => require(['../components/hotmenu'],resolve);
  const selectmenu=resolve => require(['../components/selectmenu'],resolve);
  const timefood=resolve => require(['../components/timefood'],resolve);
  const home1=resolve => require(['../components/home1'],resolve);
  const search=resolve => require(['../components/search'],resolve);
  const classes=resolve => require(['../components/classes'],resolve);
  const my=resolve => require(['../components/my'],resolve);
  const writeWorker=resolve => require(['../components/writeWorker'],resolve);
  const children=resolve => require(['../components/children'],resolve);
  const mother=resolve => require(['../components/mother'],resolve);
  const oldman=resolve => require(['../components/oldman'],resolve);
  const ordeDetail=resolve => require(['../components/ordeDetail'],resolve);
  const denglu=resolve => require(['../components/denglu'],resolve)
  const yunfuzhou=resolve => require(['../components/yunfuzhou'],resolve)
  const yunfuzhouxiang=resolve => require(['../components/yunfuzhouxiang'],resolve)
  const bailinglist=resolve => require(['../components/bailinglist'],resolve)
  const bailingin=resolve => require(['../components/bailingin'],resolve)
  const hotsearch=resolve => require(['../components/hotsearch'],resolve)
  const index=resolve => require(['../components/index'],resolve)
  const zhuce=resolve => require(['../components/zhuce'],resolve)

  const routes = [
  { 
    name:"Yindao",
    path:'/',
    component:Yindao  
  },
  { 
    name:"index1",
    path:'/home',
    component:index1,
    children:[
      {
        path:'/home',
        component:home1
      },
      {
        path:'/search',
        component:search
      },
      {
        path:'/classes',
        component:classes
      },
      {
        path:'/my',
        component:my
      }
    ]
  },
  { 
    name:"order",
    path:'/order',
    component:order
  },
  { 
    name:"hotmenu",
    path:'/hotmenu',
    component:hotmenu
  },
  { 
    name:"selectmenu",
    path:'/selectmenu',
    component:selectmenu
  },
  { 
    name:"timefood",
    path:'/timefood',
    component:timefood
  },
  { 
    name:"writeWorker",
    path:'/writeWorker',
    component:writeWorker
  },
  { 
    name:"children",
    path:'/children',
    component:children
  },
  { 
    name:"mother",
    path:'/mother',
    component:mother
  },
  { 
    name:"oldman",
    path:'/oldman',
    component:oldman
  },
  { 
    name:"login",
    path:'/login',
    component:login
  },
  { 
    name:"home",
    path:'/home',
    component:home,
    children:[
      {
        path:'/home/list',
        component:list
      }
    ]
  },
  {
    name:"ordeDetail",
    path:'/ordeDetail',
    component:ordeDetail
  },
  {
    name:"denglu",
    path:'/denglu',
    component:denglu
  },
  {
    name:"yunfuzhou",
    path:'/yunfuzhou',
    component:yunfuzhou
  },
  {
    name:"yunfuzhouxiang",
    path:'/yunfuzhouxiang',
    component:yunfuzhouxiang
  },
  {
    name:"bailinglist",
    path:'/bailinglist',
    component:bailinglist
  },
  {
    name:"bailingin",
    path:'/bailingin',
    component:bailingin
  },
  {
    name:"hotsearch",
    path:'/hotsearch',
    component:hotsearch
  },
  { 
    name:"index",
    path:'/index',
    component:index
  },
  { 
    name:"zhuce",
    path:'/zhuce',
    component:zhuce
  }
]
module.exports=routes