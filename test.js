function test(number,cout){
    let str=''+number
    let res
    let arr=str.split('')
    arr.sort((a,b)=>{
        return a-b
    })
    let myarr=[]
    while(cout){
        myarr.push(arr.shift())
        cout--
    }
    console.log(myarr)
    for(let i=0;i<myarr.length;i++){
        
    str.replace(myarr[i],'')
        console.log(str)
    }
    
    return str*1
}

console.log(test(325,1))