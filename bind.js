Function.prototype.myBind=function(context){
    let self=this
    let fn=function(){}
   
    let args=Array.prototype.slice.call(arguments,1)
    
    let fnres=function(){
        let newargs=Array.prototype.slice.call(arguments,1)
        return self.apply(this instanceof fn?this:context,args.concat(newargs))
    }
    fn.prototype=self.prototype
    fnres.prototype=new fn()
    return fnres
}