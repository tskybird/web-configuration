<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-header">
            <h4 class="modal-title">{{$t(modalTitle)}}</h4>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import device from "network/requestdevice"
import Mock from "@/mock"
import { LOGIN } from "@/store/mutation-types"

export default {
  name: "Modal",
  props: {
    modalTitle: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>