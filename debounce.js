function debounce(fn,delay){
  let timer=null

    return function(){
        if(timer) clearTimeout(timer)
        let timer=setTimeout(()=>{
            fn.apply(this,arguments)
            timer=null
        },delay)
    }
}