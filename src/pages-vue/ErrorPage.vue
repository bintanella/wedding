<template>
  <div class="height-100 flex flex-items-center flex-justify-center bg-lighter">
    <div class="padding-x-24 padding-y-36 rounded border shadow bg-white text-center" style="width: 400px;">
      <h1 class="text-red">{{ this.$route.meta.title }}</h1>
      <div class="margin-top-20">{{ this.$route.meta.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data: () => {
    return {
    };
  },
  async mounted () {

  },
  computed: {
    
  },
  methods: {
    
  },
}
</script>
