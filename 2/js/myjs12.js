var Event = new Vue();
//创建调度器对象
Vue.component("comp1",{
    template:`<div>
     我说：<input @keyup="on_change" type="text" v-model="i_said"  />
    </div>`,
    data:function () {
        return{
           i_said:'',
        }
    },
    methods:{
        on_change:function () {
            Event.$emit("comp1-said-soms",this.i_said)
        }
    }

});
Vue.component("comp2",{
    template: "<div>他说：{{comp2_said}}</div>",
    data:function () {
        return{
            comp2_said:''
        }
    },
    mounted:function () {
        var that = this;
        Event.$on("comp1-said-soms",function (data) {
            that.comp2_said = data ;
        })
    }
})

new Vue({
    el:'#app',
})