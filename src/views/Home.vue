<template>
<div>
<mu-appbar style="width: 100%;" color="#2196f3">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
<mu-bottom-nav color="#fafafa" style="background-color:#2196f3"  >
    <mu-bottom-nav-item title="首页"  ></mu-bottom-nav-item>
    <mu-bottom-nav-item title="工作台" ></mu-bottom-nav-item>
    <mu-bottom-nav-item title="我的" ></mu-bottom-nav-item>
  </mu-bottom-nav>
  <mu-button flat slot="right">LOGIN</mu-button>
</mu-appbar>
</div>
</template>
<script>
export default {
  data() {
    return {
      shift: 'movies'
    }
  },
  mounted: function() {
    // 可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    const w = document.documentElement.offsetWidth || document.body.offsetWidth
    if (w < 1000) {
      this.shift = 'movies'
    }
  }
}
</script>
