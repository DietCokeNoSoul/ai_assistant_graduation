<template>
    <view>
        <view v-if="class_name==='联系客服'" class="customer-service">联系客服</view>
        <view v-else-if="class_name==='关于我们'" class="app-detail">关于我们</view>
        <view v-else class="submit-bug">反馈问题</view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                class_name:''
            }
        },
        onLoad() {
            this.class_name = this.name
        },
        methods:{

        },
        //vue3支持props来接收页面参数
        props:{
            name:{
                type: String,
                default: ''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>