import React from "react";
import { Modal } from "antd";

export default function SelfModal({
  handleCancel,
  visible,
  searchList,
  style,
  GotoDetail
}) {
  return <Modal
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
}