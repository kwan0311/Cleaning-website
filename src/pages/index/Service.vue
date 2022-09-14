<script>
export default {
    data() {
        return {
            imgList: [
                "https://img.91goodschool.com/UpFiles/ag/8950/2021/202107/22/122237057261.jpg",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.talkimages.cn%2Fimages%2Fmedium%2F20133093%2Ftkf003_953228.jpg&refer=http%3A%2F%2Fwww.talkimages.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664848835&t=ead13b0c7d47f04e43229e6573e1649c",
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhimg.china.cn%2F0%2F4_536_181032_633_800.jpg&refer=http%3A%2F%2Fhimg.china.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664848882&t=6edb20bbe2ef3742f6ee566b78f4708a",
            ],
        }
    },

}
</script>
    
<template>
    <div class="welfare">
        <div class="welfare-carousel">
            <slider animation="normal" width="450px" height="500px">
                <slider-item v-for="(i, index) in imgList" :key="index">
                    <img :src="i">
                </slider-item>
            </slider>
            <br>
            <br>
            <br>
            <p style=text-align:center>
                <button type="submit" id="btn_submit"
                    style=color:black;font-weight:bold;width:190px;height:45px;font-size:17px;display:block;margin:0 auto>
                    Start Cleanning Trip
                </button>
            </p>
        </div>

        <div class="welfare-content">
            <label style=color:lightseagreen;font-weight:bold;>
                How big your room?
            </label>
            <label><input name="square" type="radio" value="0-80m*2" />0-80m*2</label>
            <label><input name="square" type="radio" value="81-160m*2" />81-160m*2</label>
            <label><input name="square" type="radio" value="160m*2+" />160m*2 +</label>
            <br>
            <br>
            <br>
            <label style=color:lightseagreen;font-weight:bold;>
                Where you live?
            </label>
            <select style="width:50%;">
                <option value="City">City</option>
                <option value="BoxHill">BoxHill</option>
                <option value="Footscray">Footscray</option>
                <option value="ST.Kilda">ST.Kilda</option>
                <option value="Burwood">Burwood</option>
            </select>
            <br>
            <br>
            <br>
            <label style=color:lightseagreen;font-weight:bold;>
                Language Speaking?
            </label>
            <select style="width:50%;">
                <option value="Chinese">Chinese</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
            </select>
            <br>
            <br>
            <br>
            <button type="submit" id="btn_submit"
                style=color:black;font-weight:bold;width:150px;height:45px;font-size:17px;>Start
                Searching
            </button>
        </div>
    </div>


</template>
