// 例如 [[1,4],2,3].flatten() 执行后返回 [1,4,2,3]


Array.prototype.flatten = function() {
    let res = this
    while (res.some(item => Array.isArray(item))) {
        res = [].concat(...res)
    }
    return res
}

console.log([
    [1],
    [2],
    [3, [
        [4]
    ]]
].flatten())