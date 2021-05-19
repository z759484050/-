
const obj = {
    selector: { to: { toutiao: 'FE coder' } },
    target: [1, 2, { name: 'byted' }]
};

//   get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')
 
/*  输出结果：
['FE coder', 1, 'byted'] */
 


function get(){
    let obj=[].shift.call(arguments,1)
    let res=[]

    for(let i=0;i<arguments.length;i++){
       console.log(arguments[i])
    }
    return res
}

console.log(get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name'))