const backup = function (arr) {
    const domCache = []

    function inner(par) {
        for(let item of par){
            if(item.childNodes.length > 0){
                domCache.push(item)
                // inner(item.children)
            }else{
                return
            }
        }
    }

    inner(arr)

    return domCache
}

export default backup
