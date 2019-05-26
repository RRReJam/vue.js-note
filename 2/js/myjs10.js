Vue.component('alert',{
    template:'<button @click="on_click">点我</button>',
    props:['msg'], //选择要传递的参数
    methods:{
        on_click:function () {
            alert(this.msg);
        }
    }
})
Vue.component('user',{
    template:'#user-tpl',
    props: ['username'],
    methods:{},
})

new Vue({
    el:'#app'
})