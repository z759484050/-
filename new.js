function myNew(){
    let obj=new Object()
    let Constructor=[].shift.call(arguments)
    obj.__proto__=Constructor.prototype
    let res=Constructor.apply(obj,arguments)

    return typeof res==='object'?res:obj
    
}