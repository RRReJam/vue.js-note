new Vue({
    el:'#main',
    data: {
        list: [],
        current: {},
    },
    mounted: function () {
        this.list = ms.get('list') || this.list
    },
        methods:{
            merge: function () {
                var id , is_update
                 is_update =id = this.current.id
                if(is_update){
                   var index=  this.list.findIndex(function (item) {
                             return  item.id == id
                      })
                     //this.list[index] = Object.assign({},this.current)
                    Vue.set(this.list,index,Object.assign({},this.current))
                }else{var current = this.current
                title= current.title
                if(!title&&title!==0)
                    return;
                var todo= Object.assign({},this.current)
                    todo.id=this.next_id()
               this.list.push(todo)}

               this.reset_current()
            },

            remove: function (id) {
                 var index = this.list.findIndex(function (item) {
                     return item.id ==id
                 })
                this.list.splice(index,1)
            },
            next_id:function () {
                return this.list.length+1
            },
            set_current:function (todo) {
                 this.current  =   Object.assign({},todo)
            },
            reset_current:function () {
                this.set_current({})
            }
        },

    watch:{
        list: {
            deep:true,
            handler:function (n,o) {
                if(n){
                    ms.set('list',n)
                }else {
                    ms.set('list',[])
                }
            }
        }
    }


});