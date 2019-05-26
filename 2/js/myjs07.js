var app = new Vue({
    el:'#app',
    data:{
        math:80,
        chinese:70,
        english:60,
    },
    computed:{
        sum:function () {
            return this.math + this.chinese + this.english
        },
        average:function () {
            return  Math.round(this.sum/3)
        }
    }

})
