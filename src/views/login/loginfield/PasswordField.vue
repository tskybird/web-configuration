<template>
  <input-group>
    <template v-slot:prepend>      
      <font-awesome-icon icon="key"/>      
    </template>

    <template v-slot:form-control>
      <input 
      type="text"
      name="password"
      class="form-control"    
      :value="value"
      @input="passwordChange"      
      placeholder="Password"   
      required
      /> 
    </template>
  </input-group>
</template>

<script>
import InputGroup from 'components/common/formfiled/InputGroup'

export default {
  name: 'PasswordField',
  components: {
    InputGroup   
  },
  props: ['value'],  
  methods: {
    passwordChange(event) {      
      this.$emit('input', event.target.value)
    }
  }
}
</script>