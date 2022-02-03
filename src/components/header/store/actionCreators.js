import * as actionType from './constants'

//改变isHidden
export const changeIsHiddenAction  = (isHidden) =>{
  return {
    type:actionType.CHANGE_HEADER_IS_HIDDEN,
    isHidden
  }
}
//改变背景色
export const changeHeaderBackColorAction = (ThemeColor)=>{
  return {
    type:actionType.CHANGE_HEADER_BACK_COLOR,
    ThemeColor
  }
}

//改变头部字体颜色
export const changeHeaderFontColorAction=(fontColor)=>{
  return {
    type:actionType.CHANGE_HEADER_COLOR,
    fontColor
  }
}

//改变头部Hover颜色
export const changeHeaderHoverColorAction = (HoverColor)=>{
  return {
    type:actionType.CHANGE_HEADER_HOVER_COLOR,
    HoverColor
  }
}