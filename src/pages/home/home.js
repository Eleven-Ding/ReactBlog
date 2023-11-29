import React, { memo, useState, useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import ArticleItem from "./c-cpns/articleAitem/index";
import { HomeWrapper } from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  changeHomePageAction,
  getSearchListAction,
  changeHomeSearchListShowAction,
} from "@/pages/home/store/actionCreators";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import { getHomeArticlesAction } from "./store/actionCreators";
import { getRightTagsAction } from "@/pages/rightbar/store/actionCreators";
import { SelfSelector } from "@/utils/common";
import { changeScrollTop } from "../main/store/actionCreators";
import { BlogTheme } from "@/constant";
import { InterSectionLazyLoad } from "@/middlewares/IntersectionLoad";
import { debounce } from "@/utils/common";
import { LazyComponent } from "../../components/LazyComponent";
import { getArticleDetailPrefetch } from "../../network/detail";
import { changeArticleDetailAction } from "../detail/store/actionCreators";

const SelfModal = React.lazy(() => import('./c-cpns/modal'))
const SelfPageNation = React.lazy(() => import("./c-cpns/pagenation"))

const style = {
  cursor: "pointer",
  padding: "10px 0",
  fontSize: "17px",
  textDecoration: "underline",
  color: 'blue',
};
const getTagName = (tags, tag_id) => {
  if (tag_id === -1) {
    return "博客日志";
  } else {
    const index = tags.findIndex((item) => {
      return item.tag_id === tag_id;
    });
    // TODO:这里都是空的
    return tags[index]?.tag_name || "";
  }
};
const limit = 8;
export default memo(function Home(props) {
  const InputRef = useRef();
  const pageRef = useRef();
  const dispatch = useDispatch();
  const [isShowArray, setIsShowArray] = useState(new Array(limit))

  const {
    visible,
    searchList,
    articles,
    theme,
    total,
    currentPage,
    tag_id,
    tags,

  } = SelfSelector({
    home: ['articles', 'total', 'currentPage', 'searchList', 'visible', 'tag_id'],
    right: 'tags',
    header: 'theme'
  });
  useEffect(() => {
    //获取首页文章列表
    dispatch(changMainMoveRight(true));
    dispatch(getHomeArticlesAction(limit, currentPage, tag_id)); //这个-1就是tag_id;
  }, [currentPage, dispatch, tag_id]);
  useEffect(() => {
    dispatch(changMainMoveRight(true));
    dispatch(changeArticleDetailAction({}));
    // eslint-disable-next-line no-undef

  }, [dispatch]);
  const onSearch = debounce((e) => {
    const title = e.target.value;
    if (title !== "") {
      dispatch(getSearchListAction(title));
      if (InputRef && InputRef.current && InputRef.current.state) {
        InputRef.current.state.value = "";
      }
    }
  }, 1500);
  //开启弹窗
  const handleCancel = useCallback(() => {
    dispatch(changeHomeSearchListShowAction(false));
  }, [dispatch]);

  const pageChange = useCallback((e) => {
    for (let i in isShowArray) {
      isShowArray[i] = false
    }
    setIsShowArray(isShowArray)
    dispatch(changeHomePageAction(e));
    window.scrollTo(0, 0, 1000);
    dispatch(changeScrollTop(0))

  }, [dispatch, isShowArray]);
  //跳转路由
  const GotoDetail = useCallback((id) => {
    props.history.push(`/detail/${id}`);
  }, [props.history]);

  useEffect(() => {
    dispatch(getRightTagsAction());
  }, [dispatch])
  useEffect(() => {
    InterSectionLazyLoad('articeItem', entry => {
      isShowArray[entry.target.className.split('homeItem')[1]] = true
      setIsShowArray([...isShowArray])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // 发请求咯
    articles.forEach(({ article_id }) => {
      if (!window.prefetchMap.has(`getArticleDetailPrefetch-${article_id}`))
        getArticleDetailPrefetch(article_id, true)
    })
  }, [articles])
  return (
    <HomeWrapper homeFontColor={BlogTheme[theme].homeFontColor}>
      <div className="home_content_header">
        <span className="info">
          {getTagName(tags, tag_id)}
          <span> {total} </span> 篇
        </span>
        <Input
          ref={InputRef}
          onChange={(title) => onSearch(title)}
          style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
          suffix={<SearchOutlined />}
        />
        <LazyComponent>
          <SelfModal handleCancel={handleCancel} style={style} visible={visible} searchList={searchList} GotoDetail={GotoDetail} />
        </LazyComponent>
      </div>
      <div className="home_article_list">
        {articles.map((item, index) => {
          return (
            <div key={item.article_id}>
              <ArticleItem
                index={index}
                isShow={isShowArray[index]}
                isShowArray={isShowArray}
                homeFontColor={BlogTheme[theme].homeFontColor}
                btnClick={(id) => GotoDetail(id)}
                item={item}
              ></ArticleItem>
            </div>
          );
        })}
      </div>
      <div ref={pageRef}>
        <LazyComponent>
          <SelfPageNation limit={limit} pageChange={pageChange} currentPage={currentPage} total={total} />
        </LazyComponent>
      </div>
    </HomeWrapper>
  );
});
