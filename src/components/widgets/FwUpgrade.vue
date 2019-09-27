<template>
  <div class="modal" tabindex="-1" data-backdrop="static">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h5 class="modal-title">{{$t('Firmware update')}}</h5>
          </div>
          <div class="modal-body">
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
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="triggerUpgrade">{{$t('Upload')}}</button>
            <!--:disabled="upgrading"-->
            <button class="btn btn-secondary" data-dismiss="modal" @click="closeDialog">{{$t('Close')}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/*function endWith (file, suffix) {
    return file.indexOf(suffix, file.length - suffix.length) !== -1;
}*/

export default {
  name: "FwUpgrade",
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
        return file.indexOf(suffix, file.length - suffix.length) !== -1;
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
  },

};



/*
 submit(){
   event.preventDefault()//取消默认行为
   let formdata = new FormData()
   formdata.append('file',this.file)
//此处必须设置为  multipart/form-data

let config = {
    headers: {
        'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
    }
};

this.$http.post('/upload', formData, config).then( (res) => {
       //做处理
    }).catch((error) =>{
    });
   }
  }
*/
</script>

<style lang="less" scoped>
  .input-group {
    margin-bottom: 10px;
  }
  .form-control {
    height: 36px;
  }  
  .custom-file {
    flex: 0 0 76px;
    .custom-file-input, .custom-file-label {
      width: 72px;
    }
  }  
</style>