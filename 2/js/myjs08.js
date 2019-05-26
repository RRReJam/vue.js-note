// Vue.component('alert',{
//     template: '<button @click="on_click">按钮</button>',
//     methods: {
//         on_click: function f() {
//             alert("hi")
//         }
//     }
// })  定义全局模块;
var Alert = {
    'alert': {
        template: '<button @click="on_click">点我</button>',
        methods: {
            on_click: function () {
                alert("hi")
            }
        }

    }
}



new Vue({
    el:'#app',
    components:Alert,
});
// 定义局部模块 只有#app下可以使用