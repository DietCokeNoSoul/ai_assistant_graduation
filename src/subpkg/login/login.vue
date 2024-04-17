<template>
    <!-- 设置容器 -->
    <view class="setting-detail-container">
        <!-- 设置头像 -->
        <view>
            <view class="user-image-container">
                <!-- 图片区域 -->
                <button class="user-image-box" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
                    <image class="user-image" :src="avatarUrl" />
                </button>
            </view>
        </view>
        <!-- 设置昵称 -->
        <view  class="setting-detail-box">
            <text :style="{'margin-bottom':'20px'}">昵称(不少于6个字符)</text>
            <!-- 输入昵称 -->
            <uni-easyinput v-model= "name" type="text" maxlength="16" @input="inputName"></uni-easyinput>
            <view :style="{'color':'#bababa','font-size':'13px','margin-bottom':'20px',' text-align': 'right'}"> 字数:{{ name.length }}/16</view>
        </view>
        <!-- 提交按钮 -->
        <button class="submin-name-btn" @click="submitInfo">提交</button>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                // 用户昵称
                name:"",
                avatarUrl: "/static/profile-picture.png",
                fileID: ''
            }
        },
        methods:{
            // 输入头像
            onChooseAvatar(e) {
                // console.log(e)
                this.avatarUrl = e.detail.avatarUrl
            },
            // 输入昵称
            inputName(e){

            },
            // 提交信息
            submitInfo(){
                if(this.name.length < 6 || this.name.length > 16){
                    uni.showToast({
                        title: '请正确输入昵称',
                        icon: 'none'
                    })
                    return
                }
                uni.showModal({
                    title: '确认提交信息吗？',
                    content: '',
                    showCancel: true,
                    success: ({ confirm, cancel }) => {
                        if(confirm){
                            // 上传头像
                            wx.cloud.uploadFile({
                            cloudPath: this.name, // 上传至云端的路径
                            filePath: this.avatarUrl, // 小程序临时文件路径
                            success: res => {
                                // 返回文件 ID
                                this.fileID=res.fileID
                                // 输入数据库
                                wx.cloud.callFunction({
                                    name: 'register',
                                    data: {
                                        openid: this.openid,
                                        name: this.name,
                                        fileID:this.fileID
                                    }
                                })
                                const expiredTime = Date.now() + 24 * 3600 * 1000; // 登录状态失效时间为一天后
                                // 将登录状态保存到本地缓存
                                uni.setStorageSync('loginStatus', {
                                    _openid: this.openid,
                                    expiredTime: expiredTime
                                });
                                // 保存用户信息到本地缓存
                                uni.setStorageSync('userName', this.name);
                                uni.setStorageSync('userImage', this.avatarUrl);
                                uni.reLaunch({
                                    url: '/pages/my/my?name='+this.name+'&headImg='+this.avatarUrl 
                                })
                            },
                            fail: console.error
                            })
                        }
                    }
                })

            }
        },
        props: {
            openid: {
                type: String,
                default: ''
            }
        },
        onLoad() {

        }
    }
</script>

<style lang="scss" scoped>
.setting-detail-container{
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .setting-detail-box{
        margin: 10px 10px;
        background-color: white;
        border-radius: 8px;
        padding: 15px 15px;
        display: flex;
        flex-direction: column;
    }
    .submin-name-btn{
        border-radius: 30px;
        width: 60%;
        background-color: #00CC66;
        color:#ffffff;
        margin-bottom: 20%;
    }
    .user-image-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .user-image-box{
            margin-top: 50rpx;
            border-radius: 10px;
            height: 300rpx;
            width: 300rpx;
            background-size: cover; /* 覆盖按钮 */
            background-position: center; /* 将照片居中 */
            border: none; /* 移除按钮边框 */
            padding: 0; /* 移除内边距 */
            // overflow: hidden;
            .user-image{
                width: 100%;
                height: 100%;
                // object-fit: cover;
            }
        }
        .upload-image{
                margin-top: 40rpx;
                border-radius: 10px;
                width: 400rpx;
                background-color: #00CC66;
                color:#ffffff;
        }
    }
}
</style>