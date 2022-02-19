import React, { memo } from "react";
import { RightBarWrapper } from "./style";
import TopInfo from "./c-cpns/topInfo";
import Tags from "@/components/tags";
import HotArticles from "@/components/hotArticle";
import HotComments from "@/components/hotComment";
import Skills from "../about/skills";
import Position from "./c-cpns/position";
import MyAnchor from "@/pages/detail/cpns/anchor";
import { useSelector, shallowEqual } from "react-redux";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
const Cube = React.lazy(() => import("components/cube"));
export default withRouter(
  memo(function RightBar(props) {
    const [RouterPath, setRouterPath] = useState("home");
    useEffect(() => {
      setRouterPath(props.location.pathname.split("/")[1]);
    }, [props.location.pathname]);

    const { hotArticles, homeFontColor } = useSelector(
      (state) => ({
        hotArticles: state.getIn(["life", "hotArticles"]),
        homeFontColor: state.getIn(["home", "homeFontColor"]),
      }),
      shallowEqual
    );
    return (
      <RightBarWrapper>
        <TopInfo></TopInfo>
        {/* 标签 */}

        {/* 热门文章 */}
        {RouterPath === "life" && (
          <HotArticles
            key={"1"}
            hotArticles={hotArticles}
            homeFontColor={homeFontColor}
            history={props.history}
          ></HotArticles>
        )}
        {/* 热门评论 */}
        {RouterPath === "interact" && (
          <HotComments homeFontColor={homeFontColor}></HotComments>
        )}
        {/* TODO: 可以搞一个公共组件 判断路径返回组件 */}
        {RouterPath === "about" && <Skills></Skills>}
        <Position></Position>
        {(RouterPath === "home" || RouterPath === "detail") && (
          <Tags ThemeColor={null} color="black"></Tags>
        )}
        <Cube></Cube>
        {RouterPath === "detail" && <MyAnchor isShow={true}></MyAnchor>}
      </RightBarWrapper>
    );
  })
);
