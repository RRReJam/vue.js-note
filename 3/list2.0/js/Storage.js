(function () {
    window.ms={
        set:set,
        get:get,
    }
    function set(key,val) {
        val = JSON.stringify(val)
        localStorage.setItem(key,val)
    }
    function get(key) {
        var json = localStorage.getItem(key)
        if(json){
            return JSON.parse(json)
        }
    }
})()