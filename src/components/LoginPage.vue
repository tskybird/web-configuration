<template>
  <div id="loginbox">
    <div class="modal">
        <div class="modal-dailog">
            <div class="modal-content">
                <form name="loginForm" @submit.prevent="login">                
                    <div class="modal-header">
                        <h4 class="modal-title">{{$t('Login')}}</h4>                        
                    </div>
                    <div class="modal-body">
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <div class="input-group-text">
                                    <font-awesome-icon icon="user" />
                                </div>
                            </span>
                            <input type="text" class="form-control" v-model="loginData.username" name="username" placeholder="Username" autofocus required/>
                        </div>

                    <div class="input-group">
                        <span class="input-group-prepend">
                            <div class="input-group-text">
                                <font-awesome-icon icon="key" />
                            </div>
                        </span>
                        <input type="password" class="form-control" v-model="loginData.password" name="password" placeholder="Password" required>
                    </div>

                    <div class="input-group">
                        <span class="input-group-prepend">
                            <div class="input-group-text">
                                <font-awesome-icon icon="globe-asia" />
                            </div>
                        </span>
                        <select class="form-control" name="language" v-model="selectedLang">
                            <option v-for="language in loginData.languages" :value="language.value" :key="language.value">
                                {{language.text}}
                            </option>                          
                        </select>
                        
                    </div>
                    
                    <div class="alert-danger alert" v-show="loginData.loginMessage">
                        {{$t('Login failed')}}: {{$t(loginData.loginMessage)}}
                    </div>

            </div>
            <div class="modal-footer">              
                <font-awesome-icon icon="spinner" v-show="loginData.isWaiting" class="fa-spin"/>
                <button type="submit" class="btn btn-primary" :disabled="loginData.isWaiting">{{$t('Login')}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mock from '../mock'

export default {
    name: "loginPage",  
    data () {
        return {            
            loginData: {
                username: '',   //  It will get from device. default:'admin'
                password: '',   //  It can be changed and saved via main.cgi. default: 'admin01'
                languages: [
                   { value: 'en_US', text: 'English' },
                   { value: 'zh_CN', text: '简体中文' }
                ],                 
                loginMessage: null,
                isWaiting: false            
            } 
        }
    },

    computed: {
        token () {
            return this.$store.state.token
        },     
        selectedLang: {
            get () {
                return this.$store.state.lang 
            },
            set (newValue) {
                this.$store.state.lang = newValue
                window.localStorage.setItem('lang', newValue)
            }
        }
    },  

    methods:{        
        login () {  
            let data = {
                username: this.loginData.username,
                password: this.loginData.password,
                language: this.loginData.language
            }
            
            if (!this.loginData.username || !this.loginData.password) {
               this.loginData.loginMessage = this.$t('Incorrect username or password')
               return
            }

            this.loginData.loginMessage = null
            this.loginData.isWaiting = true
            let vm = this 
            
            //login: get user & password via cgi from device   $http  mock             
            this.$device.login(data).then(  //http://localhost:8080/cgi-bin/main.cgi/login             
                function (response) { 
                    if (response.data.status) {
                        vm.$store.commit('LOGIN', response.data.status)                                           
                        vm.$router.push(                            
                            vm.$store.state.lastRoute  //  route to the path which logout from
                            // '/'   // redirect to '/' every time
                        )  
                    }else {
                        vm.loginData.isWaiting = false 
                        vm.loginData.loginMessage = response.data.message  //'Incorrect username or password'                        
                    }          
                }
            ).catch(error=> {  
                vm.loginData.isWaiting = false                
                vm.loginData.loginMessage = this.$t('Device is unreachable')               
            })
        }
    }
}
</script>

<style lang="less" scoped>
#loginbox {
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        .modal-dailog {
            max-width: 400px; 
            flex:1 1 auto;
            .modal-content {  
                box-shadow: 0 5px 15px rgba(0, 0, 0, .5);         
                .modal-header {
                   justify-content: center;
                   text-transform: uppercase;  
                   color: #3b7b9a;              
                }            
                .modal-body .input-group {
                    margin-bottom:10px;
                }
            } 
        }        
    }
    .input-group-text {
        min-width:40px;
        color: #888;
    }
}
.alert {
    margin-bottom: 0;
}
</style>