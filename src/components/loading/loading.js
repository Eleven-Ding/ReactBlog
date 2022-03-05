import React, { Component } from 'react';

let timer = {};

class Loading extends Component {
    state = {
        isShow: false
    };

    componentDidMount() {
        // 延迟显示
        timer = setTimeout(this.show, 500);
    }

    componentWillUnmount() {
        // 在loading结束时卸载定时器
        clearTimeout(timer);
    }

    show = () => {
        this.setState({ isShow: true });
    };

    render() {
        return this.state.isShow ? <h1> loading</h1> : null
    
    }
}

export default Loading;