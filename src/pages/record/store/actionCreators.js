import * as actionTypes from "./constants";
import {
  getRecordInfo
} from "@/network/record";


export const getRecordInfoAction = function (page, limit,imgList) {
  return dispatch => {
    getRecordInfo(page, limit).then(res => {
      dispatch({
        type: actionTypes.GET_RECORD_LIST,
        payload: [...imgList,...res.data?.list]
      })
    })


  }
}