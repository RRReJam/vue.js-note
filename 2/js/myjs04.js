var app = new Vue({
    el:'#app',
    methods:{
        onClick:function () {
            console.log('click')
        },
        onEnter:function () {
            console.log('enter')
        },
        onOut:function () {
            console.log('out')
        },
        onSubmit:function (e) {

            console.log("submit")
        },
        onKeyup:function () {
            console.log("press")
        },
        onEnter:function () {
            console.log("enter")
        }
    }
})