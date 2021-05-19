function curry(fn,args){
    let len=fn.length
    args=args||[]
    return function(){
        let newArgs=[...arguments,...args]
        if(newArgs.length<len){

            return curry(fn,newArgs)
        }else{
            return fn(...newArgs)
        }
    }
}