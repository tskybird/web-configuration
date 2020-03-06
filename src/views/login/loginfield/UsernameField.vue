<template>
  <input-group>
    <template v-slot:prepend>
      <font-awesome-icon icon="user"/>  
    </template>

    <template v-slot:form-control>
      <input 
      type="text"
      name="username"
      class="form-control"      
      :value="value"
      @input="usernameChange"      
      placeholder="Username"
      autofocus
      required      
      /> 
    </template>
  </input-group> 
</template>

<script>
import InputGroup from 'components/common/formfiled/InputGroup'

export default {
  name: 'UsernameField',
  components: {
    InputGroup       
  },
  props: ['value'],  
  methods: {
    usernameChange(event) {       
      this.$emit('input', event.target.value) 
    }
  }
}
</script>





