<template>
  <input-group>
    <template v-slot:prepend>    
      <font-awesome-icon icon="globe-asia"/>    
    </template>
    
    <template v-slot:form-control>
      <select 
      class="form-control" 
      name="language"
      :value="value" 
      @change="languageSelect"
      >
        <option v-for="language in languages" :value="language.value" :key="language.value">
          {{language.text}}
        </option>
      </select>
    </template>
  </input-group>
</template>

<script>
import InputGroup from 'components/common/formfiled/InputGroup'

export default {
  name: 'LanguageField',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: {
    InputGroup    
  },
  props: ['languages','value'],  
  methods: {
    languageSelect(event) {       
      this.$emit('change', event.target.value)
    }
  }
}
</script>