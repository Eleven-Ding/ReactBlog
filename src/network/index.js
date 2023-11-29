import Axios from "axios";

// 1.创建axios的实例
const instance = Axios.create({
    baseURL: "https://www.dingshiyi.top:9002/",
    timeout: 10000,
});
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = token
        return config;
    },
    (err) => {
        return err;
    }
);

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        return err;
    }
);


export default function request(option) {
    const { isPrefetch, cacheKey } = option;
    // 如果是预请求
    if (isPrefetch) {
        const p = instance(option);
        window.prefetchMap.set(cacheKey, p);
        return p
    }
    // 如果不是预请求，但是携带了 cacheKey，就尝试使用缓存
    if (cacheKey) {
        // 缓存查找，如果找到了直接返回,没找到就算了
        const instance = window.prefetchMap.get(cacheKey);
        if (instance) {
            return instance
        }
    }
    // 如果没有 cacheKey，或者说没有对应的请求，那么就使用原来的逻辑
    return instance(option);
}