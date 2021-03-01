<template>
  <v-app>
    <AppHeader></AppHeader>
    <router-view></router-view>  
  </v-app>
</template>

<script>
import AppHeader from '../layout/Header.vue'

export default {
  name: 'AppLayout',
  data() {
      return {
        
      }
    },
  components: {
    AppHeader
  }
}
</script>

<style lang="stylus">
@import "../assets/css/grid_item.css"
@import "../assets/css/home.css"
@import "../assets/css/info_user.css"
@import "../assets/css/detail.css"
.clickable
  cursor pointer
</style>
