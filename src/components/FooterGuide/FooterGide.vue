<template>
   <div id="tabber">
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item "  href=javascript:; :class="{'mui-active': '/Msite'===$route.path}" @click="goto('/Msite')">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href=javascript:; :class="{'mui-active': '/Search'===$route.path}"   @click="goto('/Search')">
				<span class="mui-icon  mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
			<a class="mui-tab-item" href=javascript:; :class="{'mui-active': '/Order'===$route.path}" @click="goto('/Order')" > 
				<span class="mui-icon mui-icon-compose"></span>
				<span class="mui-tab-label">订单</span>
			</a>
			<a class="mui-tab-item" href=javascript:; :class="{'mui-active': '/Profile'===$route.path}" @click="goto('/Profile')">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
	</div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    goto: function (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style  scoped lang="stylus" >
@import "../../common/stylus/mixins.styl"
.tabber  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px

</style>
