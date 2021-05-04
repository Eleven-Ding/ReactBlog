import React from "react";
import { Redirect } from "react-router-dom";
// const Home =()=> import(/* webpackChunkName: 'ImportFuncDemo1' */ "../pages/home/home");
// const Interact = ()=>import(/* webpackChunkName: 'ImportFuncDemo2' */ "../pages/interact/interact");
// const Battle = ()=>import(/* webpackChunkName: 'ImportFuncDemo3' */ "../pages/battle/battle");
// const About = ()=>import(/* webpackChunkName: 'ImportFuncDemo4' */ "../pages/about/about");
// const Life = ()=>import(/* webpackChunkName: 'ImportFuncDemo5' */ "../pages/life/life");
// const ArticleDetail = ()=>import(/* webpackChunkName: 'ImportFuncDemo6' */ "../pages/detail/index");
// const Share = ()=>import(/* webpackChunkName: 'ImportFuncDemo7' */ "../pages/share/index");
// const ShareDetail = ()=>import(/* webpackChunkName: 'ImportFuncDemo8' */ "../pages/shareDetail/index");
const Home = React.lazy((_) => import("../pages/home/home"));
const Interact = React.lazy((_) => import("../pages/interact/interact"));
const Battle = React.lazy((_) => import("../pages/battle/battle"));
const About = React.lazy((_) => import("../pages/about/about"));
const Life = React.lazy((_) => import("../pages/life/life"));
const ArticleDetail = React.lazy((_) => import("../pages/detail/index"));
const Share = React.lazy((_) => import("../pages/share/index"));
const ShareDetail = React.lazy((_) => import("../pages/shareDetail/index"));
export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/interact",
    component: Interact,
  },
  {
    path: "/battle",
    component: Battle,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/share",
    component: Share,
  },
  {
    path: "/life",
    component: Life,
  },
  {
    path: "/detail",
    component: ArticleDetail,
  },
  {
    path: "/shareDetail",
    component: ShareDetail,
  },
];
