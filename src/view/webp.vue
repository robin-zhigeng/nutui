<template>
    <div>
        <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Filter" 
        desc="在支持webp格式的浏览器里给图片url加上“.webp”扩展名。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <div style="width:100%;overflow:hidden;">
            <img :src="imgUrl | webp" alt=""/>
        </div>
        <nut-codebox :code="demo1"></nut-codebox>
        <nut-codebox code="export default {
    data(){
        return{
            imgUrl:'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/
            1456804243/302655/1e93032/5951e7ecNafb50399.jpg'
        }
    }
}"></nut-codebox>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:'//img10.360buyimg.com/n1/s368x368_jfs/t6499/90/1456804243/302655/1e93032/5951e7ecNafb50399.jpg',
            demo1:`<img :src="imgUrl | webp" alt=""/>`
        }
    }
}
</script>

<style>

</style>
