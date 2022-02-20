

export const tabList = [
  { title: "首页", index: 0, link: "/home" },
  { title: "实战", index: 1, link: "/battle" },
  { title: "归档", index: 2, link: "/life" },
  { title: "互动", index: 3, link: "/interact" },
  { title: "关于", index: 4, link: "/about" },
  { title: "空间", index: 5, link: "/share" },
  { title: "图库", index: 6, link: "/record" },
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