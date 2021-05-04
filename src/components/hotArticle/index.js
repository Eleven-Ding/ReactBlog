import React, { memo } from "react";
import { HotArticlesWrap } from "./style";
import HotItem from "./hotItem";
export default memo(function HotArticles(props) {
  const { hotArticles, homeFontColor, history } = props;
  // console.log(props);

  return (
    <HotArticlesWrap>
      <div className="hot" style={{ color: homeFontColor }}>
        Hot 文章
      </div>
      <div className="hot_list">
        {hotArticles.map((item, index) => {
          return (
            <HotItem
              key={item.article_id}
              item={item}
              index={index}
              history={history}
            ></HotItem>
          );
        })}
      </div>
    </HotArticlesWrap>
  );
});
