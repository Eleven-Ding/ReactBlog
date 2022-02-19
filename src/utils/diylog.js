const ConsoleText = [
    {
        text: "%c跟我走吧",
        style: "color:#ff5777;text-shadow: 0 1px 0 #ff5777,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em"
    },
    {
        text: "%c我写代码养你",
        style: " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em"
    },
    {
        text: "%c你喜欢西瓜汁,草莓汁,芒果汁,还是我这个小比崽汁？",
        style: "color: #fff; background: #f40; font-size: 20px;border-radius:0 15px 15px 0;padding:10px;"
    }
]
const ConsoleWarnText = [
    "你好,我叫丁时一",
    "欢迎来到我的博客",
    "@西华大学",
    "@Tencent",
    "@四川自贡",
    "想要走遍世界的每一个角落",
    "世界还有好多事情等着我们去探索呢！",
    "一起加油！陌生人!"
]
for (let item of ConsoleWarnText) {
    console.warn(item);
}

for (let item of ConsoleText) {
    console.log(item.text, item.style);
}


