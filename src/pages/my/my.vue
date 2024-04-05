<template>
    <!-- 主容器 -->
    <view class="my-container">
        <view>
            <!-- 用户信息拦 -->
            <view class="my-userInfo-box">
                <!-- 用户信息 -->
                <button class="my-userInfo" plain="true" @click="gotoLogin">
                    <!-- 头像 -->
                    <view class="my-user-profile-picture">
                        <image class="my-user-image" :src="userImage"></image>
                    </view>
                    <!-- 用户名和id -->
                    <view :style="{'text-align': 'left','flex-direction': 'column','margin-left':'10px'}">
                        <view :style="{'color':'white','line-height':'80rpx','font-size':'40rpx'}">{{userName}}</view>
                        <!-- <text :style="{'color':'white'}">ID:{{ userId }}</text> -->
                    </view>
                </button>
                <!-- 设置 -->
                <view class="gear-icon">
                    <uni-icons type="gear" size="40px" color="white" @click="gotoSetting"></uni-icons>
                </view>
            </view>
            <!-- 菜单容器 -->
            <view class="menu-container">
                <!-- 菜单列表 -->
                <view class="menu-list">
                    <!-- 菜单按钮 -->
                    <button plain="true" v-for="(item,index) of menuList" @click="gotoMenuDetail(item)"
                    :style="{'text-align': 'left','display':'flex', 'justify-content': 'space-between','border-bottom':'1px solid #efefef'}">
                        <text>{{ item.name }}</text>
                        <uni-icons type="right"></uni-icons>
                    </button>
                </view>
            </view>
        </view>
        <!-- 版本号 -->
        <view :style="{'text-align': 'center'}">
            <text :style="{'color':'#b0b0b0'}">版本号</text>
        </view>
    </view>
</template>

<script>
import { checkLogin } from '../../util/checkLogin.js'
import { LoginIn } from '../../util/LoginIn.js'
    export default{
        data(){
            return{
                // 菜单列表
                menuList:[
                    {name: '联系客服'},
                    {name: '关于我们'},
                    {name: '反馈问题'}
                ],
                // 用户头像
                userImage:"/static/profile-picture.png",
                // 用户昵称
                userName:"未登录",
                // 用户OPENID
                openid:""
            }
        },
        onLoad(option) {
            // 检查登录状态
            if(checkLogin()){//已登录
                uni.showLoading({
                    title: '加载中',
                    mask: true
                })
                //查询用户信息
                const loginStatus = uni.getStorageSync('loginStatus');
                wx.cloud.callFunction({
                    name: 'getUserInfo',
                    data: {
                        _openid: loginStatus._openid
                    },
                    complete: userInfo => {
                        this.userName = userInfo.result.data[0].name
                        this.userImage = userInfo.result.data[0].headImg
                        // 保存用户信息到本地缓存
                        uni.setStorageSync('userName', this.userName);
                        uni.setStorageSync('userImage', this.userImage);
                    }
                })
                uni.hideLoading() 
            }
            else{//未登录
                uni.showModal({
                    title: '是否微信登录',
                    content: '',
                    showCancel: true,
                    success:({ confirm, cancel }) => {
                        if (confirm) {
                            LoginIn().then(res => {
                                console.log(res)
                                this.userName = res.result.data[0].name
                                this.userImage = res.result.data[0].headImg
                                // 保存用户信息到本地缓存
                                uni.setStorageSync('userName', this.userName);
                                uni.setStorageSync('userImage', this.userImage);
                            })
                        }
                    }
                });
            }
            //注册后返回的用户信息
            this.userName = option.name
            this.userImage = option.headImg
        },
        methods:{
            // 跳转菜单详情
            gotoMenuDetail(item){
                uni.navigateTo({
                     url: '/subpkg/menu_detail/menu_detail?name='+item.name 
                })
            },
            // 跳转设置
            gotoSetting(){
                if(!checkLogin()){
                    uni.showToast({
                        title: '请先登录',
                        icon: 'none',
                        mask: true
                    })
                }
                else{
                    uni.navigateTo({
                    url: '/subpkg/setting/setting'
                })
                }
            },
            // 跳转登录
            gotoLogin(){
            // 检查登录状态
            if(checkLogin()){//已登录
                uni.showLoading({
                    title: '加载中',
                    mask: true
                })
                //查询用户信息
                const loginStatus = uni.getStorageSync('loginStatus');
                wx.cloud.callFunction({
                    name: 'getUserInfo',
                    data: {
                        _openid: loginStatus._openid
                    },
                    complete: userInfo => {
                        this.userName = userInfo.result.data[0].name
                        this.userImage = userInfo.result.data[0].headImg
                        // 保存用户信息到本地缓存
                        uni.setStorageSync('userName', this.userName);
                        uni.setStorageSync('userImage', this.userImage);
                    }
                })
                uni.hideLoading() 
                }
                else{//未登录
                    uni.showModal({
                        title: '是否微信登录',
                        content: '',
                        showCancel: true,
                        success:({ confirm, cancel }) => {
                            if (confirm) {
                                LoginIn().then(res => {
                                    this.userName = res.result.data[0].name
                                    this.userImage = res.result.data[0].headImg
                                    // 保存用户信息到本地缓存
                                    uni.setStorageSync('userName', this.userName);
                                    uni.setStorageSync('userImage', this.userImage);
                                })
                            }
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.my-container{
    background-color: #f3f3f3;
    height: 100%;
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .my-userInfo-box{
        display: flex;
        justify-content: space-between;
        background-color: #00CC66;
        height: 180rpx;
        .my-userInfo{
            margin-left: 20px;
            display: flex;
            background-color: #00CC66;
            border: none;
            .my-user-profile-picture{
                height: 60px;
                width: 60px;
                border-radius: 10px;
                overflow: hidden;
                .my-user-image{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .gear-icon{
            margin-top: 35rpx;
            margin-right: 30rpx;

        }
    }
    .menu-container{
        margin: 10px 10px;
        background-color: white;
        border-radius: 10px;
        .menu-list{
        margin: 10px 10px;
        background-color: white;
        button[plain] {border: 0}
        }
    }
}
</style>