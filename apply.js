Function.prototype.myapply=function(context,arr){
    context=context||window
    context.fn=this
    let args=[]
    for(let i=0;i<arr.length;i++){
        args.push('arr['+i+']')
    }
    let res=eval('context.fn('+args+')')
    delete context.fn
    return res
}