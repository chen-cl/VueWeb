<template>
<div>
  <el-container>
    <el-aside v-show="asShow" width="200px">
      
    </el-aside>
    <mu-drawer width="200px" :open.sync="open" :docked="docked" :right="position === 'right'">
    <menulist/>
    

  </mu-drawer>

    <el-container>
      <el-header>
        <mu-appbar style="width: 100%;" color="#2196f3">
          <mu-button icon slot="left" @click="showmenu">
            <mu-icon value="menu"></mu-icon>
          </mu-button>
          <mu-bottom-nav color="#fafafa" style="background-color:#2196f3"  >
            <mu-bottom-nav-item title="首页"  ></mu-bottom-nav-item>
            <mu-bottom-nav-item title="工作台" ></mu-bottom-nav-item>
            <mu-bottom-nav-item title="我的" ></mu-bottom-nav-item>
          </mu-bottom-nav>
          <mu-button flat slot="right">LOGIN</mu-button>  
        </mu-appbar>
      </el-header>

      <el-main>Main</el-main>

      <el-footer>Footer</el-footer>

    </el-container>

  </el-container>


</div>
</template>
<script>
import menulist from './MenuList.vue'
export default {
  data() {
    return {
      docked: false,
      open: false,
      asShow: false,
      position: 'left'
    }
  }, components: {
    menulist
  },
  mounted: function() {
    const w = document.documentElement.offsetWidth || document.body.offsetWidth
    if (w < 800) {
      this.open = true
    }
    window.onresize = () => {
      this.showmenu() // 可用于设置自适应屏幕，根据获得的可视宽度（兼容性）判断是否显示
    }
  },
  methods: {
    showmenu() {
      const w = document.documentElement.offsetWidth || document.body.offsetWidth
      if (w > 800) {
        this.docked = true
        this.open = !this.open
        this.asShow = !this.asShow
      } else {
        this.open = !this.open
        this.docked = false
        this.asShow = false
      }
    }
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    padding: 0px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0px;
  }
</style>