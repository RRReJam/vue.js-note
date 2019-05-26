Vue.component('like',{
    template: '#like-component-tpl',
    data:function () {
        return {
            like_count:10,
            liked:false
        } //data里面数据会变化 故应该绑定为函数形式返回
    },
    methods:{
        click_like:function () {
            if(!this.liked){
            this.like_count++;}
            else{
                this.like_count--
            }
            this.liked = !this.liked
        }
    }
});
new Vue({
    el:'#app',
})