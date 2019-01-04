<template>
    <div class="user">
        <form class="f" action="">
            <input type="text" class="put tel" placeholder="输入手机号" >
            <div class="input-bg" ></div>
            <input type="text" class="put yan" placeholder="输入验证码">
            <div class="input-bg" ></div>
            <input type="submit" class="btn" value="登录">
        </form>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    $sc:25;
    
    
    .user{
        margin-top: 50/$sc+rem;
        position: absolute;
        min-height: 100%;
        width: 100%;
        background-color: #f6f6f6;
    }
    .put{
        border: none;
        background-color: #f6f6f6;
        outline: none;
        display: block; 
        width: 100%; 
        height: 34px;
        padding: 6px 12px;
        font-size: 14px;
        color: #555;
        box-sizing: border-box;
        margin-top: 25/$sc+rem;
        
    }
    .btn{
        width: 163px;
        background-color: #fe8233;
        color: #fff;
        border: none;
        border-radius: 36px;
        margin-top: 45px;
        padding: 8px 12px;
        font-size: 15px;
        outline: none;
        display: block;
        margin: 50/$sc+rem auto;
    }
    .input-bg{
        position: absolute;
        
        height: 12px;
        width: 80%;
        border: solid #c4c4c4;
        border-width: 0 1px 1px 1px;
    }
    .f{
        padding: 0px 31px 0px 31px;
    }
</style>
