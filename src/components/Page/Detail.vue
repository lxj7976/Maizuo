<template>
    <div class="box">
        <div class="imgbox"><img :src="movie.cover.origin" /></div>
        <p class="intro">影片简介</p>
        <p class="p">导演：{{movie.director}}</p>
        <p class="p">主演：
            <span v-for="(item, index) in movie.actors" :key="index" >{{item.name}}<span v-if="index!==movie.actors.length-1">|</span></span>
        </p>
        <p class="p">地区语言：{{movie.nation}}({{movie.language}})</p>
        <p class="p">上映时间{{movie.premiereAt|formateDate}}</p>
        <p class="text">{{movie.synopsis}}</p>
        <div class="login">
            <a href="">立即登录</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            movie:{
                cover:{}
            }
        }
    },
    created(){
        var id=this.$route.params.id;
        this.$http.get("/mz/v4/api/film/"+id,{
            params:{
                __t:new Date().getTime()
            }
        }).then((res)=>{
            this.movie=res.data.data.film
            this.$root.bus.$emit("moviename",this.movie.name)
            console.log(res.data.data.film)
        })
    }
}
</script>
<style lang="scss" scoped>
$sc:25;
.box{
    height: 100%;
    background:rgba($color:  #aaa, $alpha: .3);
    background-size: 100%;
    color: #333;
    font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
    font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
    .imgbox{
            width: 100%;
            transition: all 1.2s ease 0s;
            opacity: 1;
            img{
                max-width: 100%;
            }
    }
    .p{
        height: 18px;
        overflow: hidden;
        margin-bottom: 10px;
        padding-left: 20px;
    }
    .intro{
        margin: 16px auto;
        border-left: 16px solid RGB(228, 200, 156);
        font-size: 16px;
        padding-left: 4px;
    }
    .text{
        text-overflow: ellipsis;
        margin-bottom: 80px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .login{
        position: fixed;
        left: 0;
        bottom: 20px;
        width: 100%;
        text-align: center;
        a{
            display: inline-block;
            font-size: 14px;
            min-width: 156/$sc+rem;
            height: 36/$sc+rem;
            line-height: 36/$sc+rem;
            border: none;
            background-color: #fe8233;
            padding: 0;
            margin: 0;
            border-radius: 18px;
            color: #fff;
        }
    }
}
</style>
