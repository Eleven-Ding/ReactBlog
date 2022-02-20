import { useSelector, shallowEqual } from "react-redux";
export function getCurrentFormatTime() {
  let startTime = new Date("2020-10-22"); // 开始时间
  let endTime = new Date(); // 结束时间
  let usedTime = endTime - startTime; // 相差的毫秒数
  let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
  let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
  let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
  let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
  let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
  let level3 = leavel2 - minutes * 60 * 1000;
  let seconds = Math.floor(level3 / 1000);

  return days + "天" + hours + "时" + minutes + "分" + seconds + "秒"
}


export function SelfSelector(obj) {
  return useSelector((state) => {
    const keys = Object.keys(obj);
    const result = Object.create(null)
    keys.forEach(key => {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach(item => {
          result[item] = state.getIn([key, item])
        })
      } else {
        result[value] = state.getIn([key, obj[key]])
      }
    })
    return result
  }, shallowEqual)
}

export function debounce(fn, delay) {
  var timer; // 维护一个 timer
  return function () {
    var _this = this; // 取debounce执行作用域的this
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay);
  };
}
