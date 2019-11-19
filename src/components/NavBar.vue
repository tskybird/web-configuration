<template>
  <header>    
    <nav class="navbar navbar-expand-sm navbar-dark"> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-phone">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <a class="navbar-brand" href="#">Logo</a>      
      <div class="btn-group">
        <button class="btn btn-light" @click="logout">{{$t('Logout')}}</button>        
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
          <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a class="dropdown-item" href="#" @click="save">{{$t('Save')}}</a>
            <a class="dropdown-item" href="#" @click="cancel">{{$t('Cancel')}}</a>
          </div>
        </div>
      </div>  

      <!--only phone-->
      <div class="collapse navbar-collapse" id="menu-phone">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/status">{{$t('Status')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">{{$t('Settings')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tools">{{$t('Tools')}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/support">{{$t('Support')}}</router-link>
          </li>
        </ul>
      </div>
      <!--
      <a class="navbar-brand" href="#">Logo</a>
      
      <div class="btn-group">
        <button class="btn btn-light" @click="logout">{{$t('Logout')}}</button>        
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          </button>
        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
          <a class="dropdown-item" href="#" @click="save">{{$t('Save')}}</a>
          <a class="dropdown-item" href="#" @click="cancel">{{$t('Cancel')}}</a>
        </div>
      </div>
      </div>-->
        
 
      
    </nav>
    <!--only desktop-->
    <div class="collapse navbar-collapse" id="menu-desktop">
      <ul class="navbar-nav desktop">
        <li class="nav-item">
          <router-link class="nav-link" to="/status">
            <font-awesome-icon icon="info"></font-awesome-icon>
            <span>
              {{$t('Status')}}
            </span>
          </router-link>
          
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/settings">
            <font-awesome-icon icon="cog"></font-awesome-icon>
            <span>
              {{$t('Settings')}}
            </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tools">
            <font-awesome-icon icon="tools"></font-awesome-icon>
            <span>
              {{$t('Tools')}}
              </span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/support">
            <font-awesome-icon icon="briefcase-medical"></font-awesome-icon>
            <span>
              {{$t('Support')}}
            </span>
          </router-link>
        </li>
      </ul>     
    </div>
    
  </header>
</template>

<script>
import * as types from '@/store/mutation-types'
export default {
  name: "Header", 
  mounted: function () {
     $('[data-toggle="tooltip"]').tooltip()
  }, 
  methods: { 
    logout (state) {      
      this.$store.commit(types.LOGOUT)     
      this.$store.commit(types.LAST_ROUTE, this.$route.path)
      this.$router.push('/login')     
    },
    save () {
      console.log("save")
    },
    cancel () {
      console.log("cancel")
    }
  }  
}
</script>

<style lang="less">
.navbar{  
  .btn {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
  }
  .dropdown-menu {
    right: 0;
    left: auto!important;
    min-width: 6rem;
  }
}
.desktop.navbar-nav {
  flex-direction: row !important;
}
#menu-phone .router-link-active {
  color: #FFFFFF;
}
#menu-phone {
  padding-top: 10px;
  ul{
    border-top: 1px solid rgba(255,255,255,0.2);
  }  
}
#menu-phone li {
  border-bottom: 1px solid rgba(255,255,255,0.2);    
}
.navbar-dark {
  background-color:#4829B2;
  box-shadow: 0 1px 3px rgba(122,108,133,.6);
}
.bs-tooltip-bottom .tooltip-inner, .bs-tooltip-right .tooltip-inner {
  background-color: #50B92D;
}
.bs-tooltip-bottom .arrow::before {  
  border-bottom-color: #50B92D!important;  
}
.bs-tooltip-right .arrow::before {  
  border-right-color: #50B92D!important;  
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    justify-content: space-between!important;
  }
  #menu-phone {
    display: none !important;    
  }
  #menu-desktop {
    display: flex;
    justify-content: center;
    margin-top: 20px;    
    li {
      width: 100px;       
      padding: 5px;        
      margin-left: 10px;
      margin-right: 10px;        
      a {            
        height: 30px;
        line-height: 30px;
        color: #7673f3;
        padding: 0;
        font-size: 1.1rem;
        text-align: center;            
        span {               
          padding-left: 5px; 
        }
      }
      a:hover {
        color: #6f42c1;
      }
      a.router-link-active {
        color: #e25a53;
      }    
    }   
  }
}

</style>
