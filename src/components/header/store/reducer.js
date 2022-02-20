import * as actionType from "./constants";
import { Map } from "immutable";
// TODO:到时候把这个color都统一下 搞成变量 或者同一个
import { BlogThemeKeys } from "@/constant";
const defaultState = Map({
    isHidden: false,
    theme: BlogThemeKeys.NORMAL,
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_HEADER_IS_HIDDEN:
            return state.set("isHidden", action.isHidden);
        case actionType.CHANGE_BLOG_THEME:
            return state.set("theme", action.themeKey);
        default:
            return state;
    }
}

export default reducer;