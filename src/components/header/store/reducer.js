import * as actionType from "./constants";
import { Map } from "immutable";
// TODO:到时候把这个color都统一下 搞成变量 或者同一个
const defaultState = Map({
    isHidden: false,
    ThemeColor: "#55b59a",
    fontColor: "white",
    HoverColor: "#1890FF",
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_HEADER_IS_HIDDEN:
            return state.set("isHidden", action.isHidden);
        case actionType.CHANGE_HEADER_BACK_COLOR:
            return state.set("ThemeColor", action.ThemeColor);
        case actionType.CHANGE_HEADER_COLOR:
            return state.set("fontColor", action.fontColor);
        case actionType.CHANGE_HEADER_HOVER_COLOR:
            return state.set("HoverColor", action.HoverColor);
        default:
            return state;
    }
}

export default reducer;