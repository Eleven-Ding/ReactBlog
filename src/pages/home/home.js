import React, { memo, useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import ArticleItem from "./c-cpns/articleAitem/index";
import { HomeWrapper } from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Pagination, Modal } from "antd";
import {
  changeHomePageAction,
  getSearchListAction,
  changeHomeSearchListShowAction,
} from "@/pages/home/store/actionCreators";
import { useRef } from "react";
import { changMainMoveRight } from "@/pages/main/store/actionCreators";
import { getHomeArticlesAction } from "./store/actionCreators";
import { getRightTagsAction } from "@/pages/rightbar/store/actionCreators";
import { SelfSelector } from "@/utils/common";
import { changeScrollTop } from "../main/store/actionCreators";
const style = {
  cursor: "pointer",
  padding: "10px 0",
  fontSize: "17px",
  textDecoration: "underline",
  color: 'blue',
};
const limit = 8;
export default memo(function Home(props) {
  const InputRef = useRef();
  const pageRef = useRef();
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const [isShowArray, setIsShowArray] = useState(new Array(limit))
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  //IntersectionObserver
  const [io] = useState(
    new IntersectionObserver((entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          isShowArray[entry.target.className.split('homeItem')[1]] = true
          setIsShowArray(isShowArray)
          io.unobserve(entry.target)

        }
      })
      forceUpdate()
    })))


  const {
    visible,
    searchList,
    articles,
    homeFontColor,
    total,
    currentPage,
    tag_id,
    tags,
  } = SelfSelector({
    home: ['articles', 'homeFontColor', 'total', 'currentPage', 'searchList', 'visible', 'tag_id'],
    right: 'tags'
  });
  useEffect(() => {
    //获取首页文章列表
    dispatch(changMainMoveRight(true));
    dispatch(getHomeArticlesAction(limit, currentPage, tag_id)); //这个-1就是tag_id;
  }, [currentPage, dispatch, tag_id]);
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  const onSearch = (e) => {
    //搜索
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        //在这里进行dispatch 数据了（获取数据）
        const title = e.target.value;
        if (title !== "") {
          dispatch(getSearchListAction(title));
          //清空value
          InputRef.current.state.value = "";
        }
      }, 700)
    );
  };
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
  //获取tag名称
  const getTagName = () => {
    if (tag_id === -1) {
      return "博客日志";
    } else {
      const index = tags.findIndex((item) => {
        return item.tag_id === tag_id;
      });
      return tags[index].tag_name;
    }
  };
  useEffect(() => {
    dispatch(getRightTagsAction());

  }, [dispatch])
  return (
    <HomeWrapper homeFontColor={homeFontColor}>
      <div className="home_content_header">
        <span className="info">
          {getTagName()} <span> {total} </span> 篇
        </span>
        <Input
          ref={InputRef}
          onChange={(title) => onSearch(title)}
          style={{ width: 150, borderRadius: 5, color: "#7a7a7a" }}
          suffix={<SearchOutlined />}
        />
        <Modal
          onOk={() => handleCancel()}
          title="文章搜索结果"
          visible={visible}
          onCancel={() => handleCancel()}
        >
          <div className="searchList">
            {searchList.length !== 0
              ? searchList &&
              searchList.map((item) => {
                return (
                  <div
                    style={style}
                    onClick={() => {
                      GotoDetail(item.article_id);
                      handleCancel();
                    }}
                    className="search_list_item"
                    key={item.article_id}
                  >
                    {item.title}
                  </div>
                );
              })
              : "暂无对应文章"}
          </div>
        </Modal>
      </div>
      <div className="home_article_list">
        {articles.map((item, index) => {
          return (
            <div key={item.article_id}>
              <ArticleItem

                index={index}
                isShow={isShowArray[index]}
                io={io}

                isShowArray={isShowArray}
                homeFontColor={homeFontColor}
                btnClick={(id) => GotoDetail(id)}
                item={item}
              ></ArticleItem>
            </div>
            // </CSSTransition>
          );
        })}
      </div>
      <div ref={pageRef}>
        <Pagination
          className={"Pagination page"}
          defaultCurrent={currentPage}
          total={total}
          responsive={true}
          current={currentPage}
          showQuickJumper
          pageSize={limit}
          onChange={(e) => pageChange(e)}
        />
      </div>
    </HomeWrapper>
  );
});
