import { Map } from "immutable";
import * as actionTypes from "./constants";
const defaultState = Map({
  imgList: [],
  previewUrl: "",
  showPreViewCpn: false,
  currentImgIndex: "",
  isFetchingData: false,
  //已经排好序的数量
  preImgListCount: 0
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_RECORD_LIST:
      return { ...state, imgList: action.payload }
    case actionTypes.SET_PREVIEW_URL:
      return { ...state, previewUrl: action.payload }
    case actionTypes.SET_SHOW_PREVIEW_CPNS:
      return { ...state, showPreViewCpn: action.payload };
    case actionTypes.SET_CURRENT_IMG_INDEX:
      return { ...state, currentImgIndex: action.payload }
    case actionTypes.SET_IS_FETCHING_DATA:
      return { ...state, isFetchingData: action.payload }
    case actionTypes.SET_PRE_IMG_LIST_COUNT:
      return { ...state, preImgListCount: action.payload }
    default:
      return state
  }
}
export default reducer;
