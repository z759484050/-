function myExtends(father, son) {
    let prototype = Object.create(father.prototype)
    prototype.Constructor = son
    son.prototype = prototype
}