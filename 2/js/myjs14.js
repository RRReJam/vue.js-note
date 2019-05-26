Vue.directive('pin',function (el,binding ) {
    //binding即为指令的值 例如v-pin=false binding的value就为false
    var binded = binding.value;
    var position = binding.modifiers;
    var warning = binding.arg;
    //modifiers可以获取el. .的参数并封装到对象中 可以迭代出所有属性、
    //而：传的参数通过arg获取
    if(binded){
        el.style.position = 'fixed';
        for(var key in position){
            if(position[key]){
                el.style[key] = '10px'
            }
        }
        if(warning === 'true'){
            el.style.backgroundColor = 'red';
        }

    }else {
        el.style.position = '';
        el.style.backgroundColor = '';
    }
    
})
new Vue({
    el:"#app",
    data:{
        card1:{
            pinded: false,
        },
        card2:{
            pinded:false,
        }
    }
})