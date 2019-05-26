Vue.component('balance',{
    template:`
    <div>
    <show @show_balance="show_balance"></show>
    <!--创建一个事件show_balance ，当他被触发后执行show_balance方法-->
    <div v-if="show">999</div>
    </div>
    `,
    methods:{
        show_balance:function (data) {
            this.show=true
            console.log("data",data)
        }
    },
    data:function () {
        return{
            show:false
        }
    }
});
Vue.component('show',{
    template: '<button @click="on_click">点我</button>',
    methods:{
        on_click:function () {
            this.$emit('show_balance',{a:1})
            // 点击click触发事件show_balance并返回参数
        }
    }
});
new Vue({
    el:'#app',
})