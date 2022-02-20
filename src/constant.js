

export const tabList = [
  { text: "首页", index: 0, link: "/home" },
  { text: "实战", index: 1, link: "/battle" },
  { text: "归档", index: 2, link: "/life" },
  { text: "互动", index: 3, link: "/interact" },
  { text: "关于", index: 4, link: "/about" },
  { text: "空间", index: 5, link: "/share" },
  { text: "图库", index: 6, link: "/record" },
];



export function getHeaderRenderIndexByWidth(screenWidth) {
  if (screenWidth >= 1450) {
    return (tabList.length)
  } else if (screenWidth < 1450 && screenWidth >= 1250) {
    return (tabList.length - 1)
  } else if (screenWidth < 1250 && screenWidth >= 820) {
    return (tabList.length - 2)
  } else {
    return (0)
  }
}

export const titleList = {
  'home': "博客首页",
  'battle': "实战经验",
  "life": "历程记录",
  'interact': "互动交流",
  'about': "关于博主",
  'share': "分享空间",
  'record': "个人图库",
  'detail': "文章详情",
  'shareDetail': "分享详情"
}

export const MARGIN_WIDTH = 12



export const BlogTheme = {
  'normal': {
    homeFontColor: "rgb(32,157,123)",
    HoverColor: "#1890FF",
    ThemeColor: "#55b59a",
    fontColor: "white"
  },
  'darknormal': {
    homeFontColor: "#1890FF",
    HoverColor: "white",
    ThemeColor: "rgb(40,54,70)",
    fontColor: "#B4B9BE"
  }
}

export const BlogThemeKeys = {
  NORMAL: "normal",
  DARKNORMAL: "darknormal"
}