<template>  
  <form name="loginForm" id="loginbox" @submit.prevent="login">
    <modal modal-title="Login" class="login-modal">
      <template v-slot:modal-body class=".login-modal-body">
        <username-field v-model="loginData.username"/> 
        <password-field v-model="loginData.password" />        
        <language-field v-model="selectedLang" :languages="loginData.languages"/>

        <alert prepend="Login failed" :alert-info="loginData.loginMessage"/>
      </template>

      <template v-slot:modal-footer>
        <font-awesome-icon icon="spinner" v-show="loginData.isWaiting" class="fa-spin" />
        <button type="submit" class="btn btn-primary" :disabled="loginData.isWaiting">
          {{$t('Login')}}
        </button>
      </template>
    </modal>
  </form>
  
</template>

<script>
import device from 'network/requestdevice'
import { LOGIN, CHANGE_LANGUAGE } from '@/store/mutation-types'

import Modal from 'components/common/modal/Modal'
import UsernameField from './loginfield/UsernameField'
import PasswordField from './loginfield/PasswordField'
import LanguageField from './loginfield/LanguageField'
import Alert from 'components/contents/Alert'

export default {
  name: "LoginPage",
  components: {
    Modal,
    UsernameField,
    PasswordField,
    LanguageField,
    Alert 
  },
  data() {
    return {
      loginData: {
        username: "", //  It will get from device. default:'admin'
        password: "", //  It can be changed and saved via main.cgi. default: 'admin01'
        languages: [
          { value: "en_US", text: "English" },
          { value: "zh_CN", text: "简体中文" }
        ],
        loginMessage: null,
        isWaiting: false
      }
    }
  },

  computed: {   
    selectedLang: {
      get() {
        return this.$store.state.lang
      },
      set(newValue) { 
        this.$store.commit(CHANGE_LANGUAGE, newValue)
        window.localStorage.setItem("lang", newValue)         
      }
    }
  },

  methods: {    
    login() {
      let data = {   
        username: this.loginData.username,
        password: this.loginData.password,
        language: this.loginData.language
      }
     
      if (!this.loginData.username || !this.loginData.password) {
        this.loginData.loginMessage = "Incorrect username or password"
        return
      }

      this.loginData.loginMessage = null
      this.loginData.isWaiting = true
      let vm = this

      //login: get user & password via cgi from device $http mock
      device
        .login(data)
        .then(
          //http://localhost:8080/cgi-bin/main.cgi/login
          function(response) {
            if (response.data.status) {  
              vm.$store.commit(LOGIN, response.data.status)
              vm.$router.push(
                vm.$store.state.lastRoute //  route to the path which logout from
                // '/'                    // redirect to '/' every time
              )
            } else {
              vm.loginData.isWaiting = false
              vm.loginData.loginMessage = response.data.message //'Incorrect username or password'             
            }
          }
        )
        .catch(error => { 
          vm.loginData.isWaiting = false          
          vm.loginData.loginMessage = "Device is unreachable"        
        })
    }
  }
}
</script>

<style>
.login-modal.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-modal .modal-dialog {
  max-width: 400px;
  flex: 1 1 auto;
}
.login-modal .modal-content {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
.login-modal .modal-header {
  justify-content: center;
  text-transform: uppercase;
  color: #3b7b9a;
}
.login-modal .modal-body .input-group {
  margin-bottom: 10px;
}
</style>