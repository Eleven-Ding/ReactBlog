import React from "react";
import { Redirect } from "react-router-dom";
const Home = React.lazy((_) =>
    import ("../pages/home/home"));
const Interact = React.lazy((_) =>
    import ("../pages/interact/interact"));
const Battle = React.lazy((_) =>
    import ("../pages/battle/battle"));
const About = React.lazy((_) =>
    import ("../pages/about/about"));
const Life = React.lazy((_) =>
    import ("../pages/life/life"));
const ArticleDetail = React.lazy((_) =>
    import ("../pages/detail/index"));
const Share = React.lazy((_) =>
    import ("../pages/share/index"));
const ShareDetail = React.lazy((_) =>
    import ("../pages/shareDetail/index"));
const Record = React.lazy((_) =>
    import ("../pages/record/index"));
export default [{
        path: "/",
        exact: true,
        render: () => < Redirect to = "/home" / > ,
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
    {
        path: "/record",
        component: Record,
    },

];