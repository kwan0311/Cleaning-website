<script>
export default {
    data() {
        return {
            imgList: [
                "https://img.91goodschool.com/UpFiles/ag/8950/2021/202107/22/122237057261.jpg",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20133093%2Ftkf003_953228.jpg&refer=http%3A%2F%2Fwww.talkimages.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664848835&t=ead13b0c7d47f04e43229e6573e1649c",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhimg.china.cn%2F0%2F4_536_181032_633_800.jpg&refer=http%3A%2F%2Fhimg.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664848882&t=6edb20bbe2ef3742f6ee566b78f4708a",
            ],
            username:"",
            password:""
        }
    },
    methods: {
        loginfun(){
            this.$router.push({path:'/',query:{username:this.username,password:this.password}})
        }
    }

}
</script>
    
<template>
    <div class="welfare">
        <div class="welfare-carousel">
        </div>

        <div class="welfare-content">
            <label style=color:lightseagreen;font-weight:bold;>
                Username:
            </label>
            <label><input v-model="username" type="text"/></label>
            <br>
            <br>
            <br>
            <label style=color:lightseagreen;font-weight:bold;>
                Password:
            </label>
            <label><input v-model="password"  type="password"/></label>
            <br>
            <br>
            <br>
            <button type="submit" id="btn_submit" @click="loginfun"
                style=color:black;font-weight:bold;width:150px;height:45px;font-size:17px;>
                Login
            </button>
        </div>
    </div>


</template>
