<template>
<mu-paper :z-depth="1" class="demo-list-wrap">
  <mu-appbar color="primary">
    <mu-button icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Inbox
  </mu-appbar>
   <mu-list   value="ss" >
     <mu-sub-header>Today</mu-sub-header>
           <mu-list-item  button   value="ss">
        <mu-list-item-title>List Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  button   >
        <mu-list-item-title>List Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  button  >
        <mu-list-item-title>List Item 3</mu-list-item-title>
      </mu-list-item>
  </mu-list>
</mu-paper>
</template>

<script>
export default {
  data() {
    return {
      open: 'send'
    }
  }
}
</script>
<style>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  overflow: hidden;
}
</style>