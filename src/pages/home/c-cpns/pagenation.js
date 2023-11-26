import React from "react";

import { Pagination } from "antd";

export default function SelfPageNation({
  currentPage,
  total,
  limit,
  pageChange
}) {
  return <Pagination
    className={"Pagination page"}
    defaultCurrent={currentPage}
    total={total}
    responsive={true}
    current={currentPage}
    showQuickJumper
    pageSize={limit}
    onChange={(e) => pageChange(e)}
  />
}