function debounce(fn, delay) {
    let timer = null

    return function() {
        if (timer) clearTimeout(timer)
        let timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}


function aaa() {
    console.log([...arguments])
}


[1, 2, 3, 4, 5, 6, 8].reduce(aaa, 0)