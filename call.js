Function.prototype.mycall=function(context){
    context=context||window
    context.fn=this
    let args=[]
    for(let i=1;i<arguments.length;i++){
        args.push('arguments['+i+']')
    }
    let res=eval('context.fn('+args+')')
    delete context.fn
    return res
}


let foo={
    value:1
}
function bar(name){
    console.log(this.value)
    console.log(name)
}

bar.mycall(foo,'张南翔')


