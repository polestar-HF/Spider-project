Object.defineProperty(window, 'cookie',{
    set(v) {
        console.log('设置cookie -->', v)
        debugger;
    }
})