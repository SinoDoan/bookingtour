<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end py-0">
      <ul class="navbar-nav">

        <li class="nav-item " v-show="!$currentUser.id">
          <div class="nav-link register clickable" @click="openLoginDialog()">
            Register
          </div>
        </li>

        <li class="nav-item" v-show="!$currentUser.id">
          <div class="nav-link clickable" @click="openLoginDialog(true)">
            Login
          </div>
        </li>

        <li class="nav-item" v-if="$currentUser.id">
          <div class="nav-link clickable" @click="$router.push({ name: 'user-infor'})">
             {{ greeting }}
          </div>
        </li>

        <li class="nav-item" v-if="$currentUser.id" @click="makeLogout">
          <div class="nav-link clickable">
            Logout
            <i class="fa fa-sign-out"></i>
          </div>
        </li>

      </ul>
    </nav>
    <login-dialog
      :visible.sync="loginDialogVisible"
      :default-tab="defaultLoginDialogTab"
    >
    </login-dialog>
  </div>
</template>

<script>
import LoginDialog from '../components/user/Login'
import { makeLogout } from '../services/auth.service'
import { mapGetters } from 'vuex'

export default {

  components: {
    LoginDialog
  },

  data () {
    return {
      makeLogout,
      loginDialogVisible: false,
      defaultLoginDialogTab: 'login'
    }
  },

  computed: {
    greeting () {
      return `Hello ${this.$currentUser.email}`
    }
  },

  methods: {
    openLoginDialog (isLogin) {
      this.defaultLoginDialogTab = isLogin ? 'login' : 'register'
      this.loginDialogVisible = true
    },
    ...mapGetters({ isAdmin: 'user/isAdmin' })
  }
}
</script>

<style lang="stylus" scoped>
</style>
