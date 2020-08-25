<!--
 * @Descripttion: 
 * @version: 
 * @Author: zl
 * @Date: 2020-08-25 09:32:56
 * @LastEditors: zl
 * @LastEditTime: 2020-08-25 09:33:02
-->
<template>
  <div>
    <div class="box">
      <div class="small-box">
        12
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getData () {
      this.$API.login({
        name: '123'
      }).then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.getData()
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.box {
  @include wh(300px, 300px);
  @include flexCt;
  border: 1px solid;
  .small-box {
    width: 50px;
    height: 40px;
    border: 1px solid red;
  }
}
</style>