
// 例如 [[1,4],2,3].flatten() 执行后返回 [1,4,2,3]
// Q:
// test case1
[[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flatten()

test case2 //tip: 跳过[], null, undefined
[['a','b'], [0,['a']], [false], null,[],undefined,33].flatten()
=> ['a','b',0,'a',false,33]


Array.prototype.flatten=function(){
    let res=this
    while(res.some(item=>Array.isArray(item))){
        res=[].concat(...res)
    }
    return res
}

console.log([[1],[2],[3,[[4]]]].flatten())