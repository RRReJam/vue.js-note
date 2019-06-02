var Event = new Vue();

Vue.component('task',{
    template:"#task-tpl",
    props:['todo'],
    methods:{
        action:function (name,params) {
            Event.$emit(name,params)
        }
    }
})

var alert_sound = document.getElementById('alert_sound')


new Vue({
    el: "#main",
    data: {
        list: [],
        last_id:0,
        current: {},
    },

    mounted:function(){
        var that = this
        this.list = ms.get('list')||this.list;
        setInterval(function () {
             that.checkalert();
        },1000)
        Event.$on('remove',function (id) {
            if(id){
                that.remove(id);
            }
        });
        Event.$on('toggle',function (id) {
            if(id){
                that.toggle(id);
            }
        });
        Event.$on('set_current',function (id) {
            if(id){
                that.set_current(id);
            }
        });
        Event.$on('open_detail',function (id) {
            if(id){
                that.toggle_detail(id);
            }
        });

    },

    methods: {
        checkalert: function () {
            var that = this;
            this.list.forEach(function (row, i) {
                var alert_at = row.alert_at
                if (!alert_at || row.alert_confiremd) return;
              var alert_at = new Date(alert_at);
              var timestamp = alert_at.getTime();
              var now =(new Date()).getTime()
                if(now >= timestamp){
                    alert_sound.play();
                    var confirmed= confirm('提醒:'+row.title)
                   Vue.set(that.list[i],'alert_confiremd',confirmed)

                }
                if(row.alert_confiremd){
                    alert_sound.pause();
                }



        })
        },
        merge: function () {
            var is_update, id;
            var current = this.current
            is_update= id = this.current.id;

            if(is_update){
                var index = this.find_index(id)
                Vue.set(this.list,index,Object.assign({},this.current))
            }else {
                if(!current.title && current.title !== 0){
                    return
                }
                var todo = Object.assign({},this.current)
                    this.last_id++;
                ms.set('last_id',this.last_id)
                todo.id=this.last_id
                //this.current的值保存在{}中 并赋值给todo
                this.list.push(todo)


            }
            this.reset_current()
        },

        remove: function (id) {
            var index = this.find_index(id)
           this.list.splice(index,1)

        },
        next_id :function () {
            return this.list.length +1
        },
        set_current :function (todo) {
            this.current = Object.assign({},todo)
        },
        reset_current:function () {
            this.set_current({})
        },
        find_index :function (id) {
            return this.list.findIndex(function (item) {
                return item.id == id;
            })
        },
        toggle:function (id) {
            var i = this.find_index(id)
            Vue.set(this.list[i],'completed',!this.list[i].completed)
        },
        toggle_detail:function (id) {
            var index = this.find_index(id)
            this.list[index].show_detail
            Vue.set(this.list[index],'show_detail', !this.list[index].show_detail);
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



})
