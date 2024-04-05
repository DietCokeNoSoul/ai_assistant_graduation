<template>
    <!-- 设置页面 -->
    <view class="setting-container">
        <!-- 设置菜单 -->
        <view class="setting-menu">
            <!-- 设置头像 -->
            <button class="btn-setting" @click="gotoSetting('头像', userImage )">头像
                <view class="user-image-container">
                    <image class="user-image" :src="userImage"></image>
                </view>
            </button>
            <!-- 设置昵称 -->
            <button class="btn-setting" @click="gotoSetting('昵称', userName )">昵称
                <view>{{ userName }}
                    <uni-icons type="right"></uni-icons>
                </view>
            </button>
            <!-- 设置手机账号
            <button class="btn-setting" @click="gotoSetting('手机账号',phone)">手机账号
                <view>{{ phone }}
                    <uni-icons type="right"></uni-icons>
                </view>
            </button> -->
        </view>
        <button class="btn-logout" plain="true" @click="logout">退出登录</button>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                // 用户头像
                userImage:"/static/profile-picture.png",
                // 用户昵称
                userName:"未设置昵称",
                // 手机账号
                // phone:"未绑定手机",
            }
        },
        methods:{
            // 跳转到设置页面
            gotoSetting(item, value){
                uni.navigateTo({
                    url: '/subpkg/setting/setting_detail?name='+item+'&value='+value
                })
            },
            // 退出登录
            logout(){
                uni.showModal({
                    title: '提示',
                    content: '确定退出登录吗？',
                    success: function (res) {
                        if (res.confirm) {
                            uni.removeStorageSync('userName')
                            uni.removeStorageSync('userImage')
                            uni.removeStorageSync('loginStatus')
                            uni.reLaunch({
                                url: '/pages/my/my'
                            })
                        }
                    }
                })
            }
        },
        onLoad() {
            this.userName = uni.getStorageSync('userName')
            this.userImage = uni.getStorageSync('userImage')
        }
    }
</script>

<style lang="scss" scoped>
.setting-container{
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #f3f3f3;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .setting-menu{
        .btn-setting{
            height: 60px;
            border-bottom: 1px solid #efefef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:#787daa;
        }
        .user-image-container{
            height: 45px;
            width: 45px;
            overflow: hidden;
            border-radius: 5px;
            .user-image{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .btn-logout{
        margin-bottom: 20px;
        background-color: #f3f3f3;
        color: red;
        border: none;
    }
}
</style>