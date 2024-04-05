<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			wx.cloud.init({
				env: 'cloud1-0ghnc8uf659e3547',
				traceUser: true,
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
