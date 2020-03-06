<template>
  <form class="fw-upgrade">
    <modal modal-title="Firmware update" tabindex="-1" data-backdrop="static">    
      <template v-slot:modal-body>
        <p>{{$t('Select a File to Upload')}}</p>
        <div class="row">
          <div class="input-group col-md-9">
            <input type="text" v-model="selection.resource"  class="form-control" name="firmwareSourceInput" :readonly="selection.file"/>
            <div class="custom-file">                
              <input type="file" class="custom-file-input" id="inputFile"  @change="uploading($event)">
              <label class="custom-file-label" for="inputFile"></label>
            </div>
          </div>
        </div>
        <div class="alert-danger alert" v-show="selection.invalid">              
          {{$t('Invalid firmware supplied')}}
        </div>
      </template>

      <template v-slot:modal-footer>
        <button class="btn btn-primary" @click="triggerUpgrade">{{$t('Upload')}}</button>
        <!--:disabled="upgrading"-->
        <button class="btn btn-secondary" data-dismiss="modal" @click="closeDialog">{{$t('Close')}}</button>          
      </template>    
    </modal>  
  </form>  
</template>

<script>
import Modal from 'components/common/modal/Modal'

export default {
  name: "FwUpgrade",
  components: {
    Modal
  },
  data () {
    return {
      selection: {        
        resource:'',
        file: false,
        invalid: false
      }        
    }
  },
  methods: {
    uploading (event) {      
      if (event.target.files[0]){  
        if (endWith(event.target.files[0].name, '.bin') || endWith(event.target.files[0].name, '.img')){
          this.selection.file = true
          this.selection.resource = event.target.files[0].name
        } else {
          this.selection.invalid = true
        }
      }

      function endWith (file, suffix) {
        return file.indexOf(suffix, file.length - suffix.length) !== -1
      }
    },
    triggerUpgrade () {      
      console.log("upgrade")
    },
    closeDialog () {
      this.selection.resource = ''
      this.selection.file = false
      this.selection.invalid = false
    }
  }

}

/*
submit(){
   event.preventDefault()//取消默认行为
   let formdata = new FormData()
   formdata.append('file',this.file)
//此处必须设置为 multipart/form-data

let config = {
    headers: {
      'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
    }
}

this.$http.post('/upload', formData, config).then( (res) => {
       //做处理
    }).catch((error) =>{
    })
   }
  }
*/
</script>

<style scoped>
  .input-group {
    margin-bottom: 10px;
  }
  .form-control {
    height: 36px;
  }  
  .custom-file {
    flex: 0 0 76px;
  }
  .custom-file  .custom-file-input, .custom-file-label {
    width: 72px;
  }
  
  .fw-upgrade {
    display: none;
  }
  .modal  {
    display: block
  }
</style>