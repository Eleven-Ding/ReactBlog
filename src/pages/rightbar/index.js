import React, { memo } from "react";
import { RightBarWrapper } from "./style";
import TopInfo from "./c-cpns/topInfo";
import Tags from "@/components/tags";
import HotArticles from "@/components/hotArticle";
import HotComments from "@/components/hotComment";
import Skills from "@/pages/about/skills";
import Position from "./c-cpns/position";
import MyAnchor from "@/pages/detail/cpns/anchor";
import { SelfSelector } from "@/utils/common";
import { withRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogTheme } from "@/constant";
function RenderCmpByRoutes({ route, homeFontColor, hotArticles, history }) {
  switch (route) {
    case 'about':
      return <Skills />
    case 'home':
      return (
        <>
          <Tags />
        </>
      )
    case 'detail':
      return <MyAnchor />
    case "interact":
      return <HotComments homeFontColor={homeFontColor}></HotComments>
    case "life":
      return <HotArticles
        key={"1"}
        homeFontColor={homeFontColor}
        history={history}
        hotArticles={hotArticles}
      ></HotArticles>

    default:
      return null
  }
}
export default withRouter(
  memo(function RightBar(props) {
    const [RouterPath, setRouterPath] = useState("home");
    useEffect(() => {
      setRouterPath(props.location.pathname.split("/")[1]);
    }, [props.location.pathname]);
    const { hotArticles, theme } = SelfSelector({
      life: "hotArticles",
      header: "theme"
    })

    return (
      <RightBarWrapper>
        <TopInfo></TopInfo>
        <Position></Position>
        <RenderCmpByRoutes route={RouterPath} homeFontColor={BlogTheme[theme].homeFontColor} hotArticles={hotArticles}
          history={props.history} />
      </RightBarWrapper>
    );
  })
);
