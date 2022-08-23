<template>
  <div class="absolute width-100 height-100 top-0 left-0 flex flex-items-center"
      :class="{ 'flex-column flex-justify-center text-center': !inlineDisplay }"
      style="background-color: rgba(255, 255, 255, .6);">
    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
      class="width-52px"
      :class="{'margin-right-16 padding-y-4': inlineDisplay, 'margin-bottom-8': !inlineDisplay}">
    <div>
      <div class="h3 fw-bold margin-bottom-8">
        {{ title }}
      </div>
      <div class="fw-500 text-grayer">
        {{ message }}
      </div>
    </div>
    <div v-show="showLoading"
        class="inline">
      <img src="../assets/loading.svg" class="width-72px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {
    title: { type: String, default: '' },
    message: { type: String, default: '' },
    showLoading: { type: Boolean, default: false },
    inlineDisplay: { type: Boolean, default: false },
  },
}
</script>