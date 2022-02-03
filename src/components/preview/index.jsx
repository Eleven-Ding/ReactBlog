import React, { memo } from "react";
import { useSelector, shallowEqual } from 'react-redux'
import { PreviewWrapper } from "./style";
export default memo(function PreView(props) {
  const { previewUrl, showPreViewCpn } = useSelector(
    (state) => ({
      previewUrl: state.getIn(["record", "previewUrl"]),
      showPreViewCpn: state.getIn(["record", "showPreViewCpn"]),
    }),
    shallowEqual
  );
  const result = showPreViewCpn ? (
    <PreviewWrapper >
      <h1>
        2333
      </h1>
    </PreviewWrapper>
  ) : null
  return result
})