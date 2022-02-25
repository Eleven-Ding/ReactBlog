import React, { useCallback, useEffect, useState } from 'react';

let timer = {};

function Loading() {
    const [isShow, setIsShow] = useState();
    const show = useCallback(() => {
        setIsShow(true)
    }, []);
    useEffect(() => {
        timer = setTimeout(show, 500);
        return _ => {
            clearTimeout(timer);
        }
    }, [show])
    return isShow ? <h1>加载中 </h1> : null
}

export default Loading;