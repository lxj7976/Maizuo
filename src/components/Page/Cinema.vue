<template>
    <div class="box">
        <ul>
            <li class="first" v-for="(item, key, index) in cinemaObj" :key="index"> 
                <h2 @click="toggle(key)">{{key}}</h2>
                <ul v-show="item.flag">
                    <li class="second" v-for="(subitem,index) in item" :key="index">
                        <span>{{subitem.name}}</span>
                    </li>
                </ul>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            cinemaObj:{}
        }
    },
    created(){
        this.$http.get("/mz/v4/api/cinema",{
            params:{
                __t:new Date().getTime()
            }
        }).then((res)=>{
            var arr=[];
            res.data.data.cinemas.forEach((item)=>{
                if(!this.cinemaObj[item.district.name]){
                    this.cinemaObj[item.district.name]=[];
                    arr.push(item.district.name);
                    this.cinemaObj[item.district.name].flag=false;
                }
                 this.cinemaObj[item.district.name].push(item);
                 
            })
                this.cinemaObj[arr[0]].flag=true;
                 this.$forceUpdate();
        })
    },
    methods:{
        toggle(item){
            this.cinemaObj[item].flag=!this.cinemaObj[item].flag;
            this.$forceUpdate();

        },
        aler(a){
            alert("aaa")
        }
    }
}
</script>
<style lang="scss" scoped>
$sc:25;
.box{
    background:rgba($color:  #aaa, $alpha: .1);
   
    ul{
        li{
            h2{
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                padding-left: 16px;
                background: #e1e1e1;
                margin-bottom: 1px;
                color: #636363;
                cursor: pointer;
            }
            .second{
                border-radius: 5px;
                padding: 10px 0 12px 16px;
                cursor: pointer;
                margin: 0 auto;
                border-bottom: 1px solid #e1e1e1;
                cursor: pointer;
                min-width: 320px;
                background: #ffffff;
                span{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display: inline-block;
                    vertical-align: text-top;
                    max-width: 80%;
                    display: inline-block;
                    font-size: 16px;
                    width: 100%;
                    margin-bottom: 5px;
                }
            }
        }
        
        // .first{
        //     width: 375/$sc+rem;
        //     height: 40/$sc+rem;
        // }
    }
    
}
</style>
