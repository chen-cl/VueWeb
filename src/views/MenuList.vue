<template>
<mu-list   value="ss" :v-for="item in menudata">
     <mu-sub-header>{{item.Name}}</mu-sub-header>
           <mu-list-item  button   value="ss" :v-for="child in item.children">
        <mu-list-item-title>{{child.Name}}</mu-list-item-title>
      </mu-list-item>
  </mu-list>
</template>

<script>
export default {
  data() {
    return {
      menudata: []
    }
  },
  render(createElement) { // 渲染函数

  },
  methods: {
    async createItem(createElement) {
      const _this = this
      await _this.$axios.get('/menu', {
        params: {
          account: '1'
        }
      })
        .then(function(response) {
          _this.menudata = response.data
          
          console.log(_this.menudata)
          _this.menuParent = _this.menudata.filter(t => t.MenuParentNo === 0)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>