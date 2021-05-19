function myPromiseAll(arr){
    let len=arr.len
    let count=0
    return new Promise((reslove,reject)=>{
        let res=[]
        for(let i in arr){
            Promise.resolve(arr[i]).then(data=>{
                res.push(data)
                count++
                if(count===len){
                    reslove(res)
                }
            }).catch(e=>{
                reject(e)
            })
        }
    })
}