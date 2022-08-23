<template>
  <div class="margin-y-24">
    <h1 class="fw-600 margin-bottom-16" v-if="level === 0">{{ title }}</h1>
    <h2 class="fw-600" v-if="level === 1">{{ title }}</h2>
    <h3 class="fw-600" v-if="level === 2">{{ title }}</h3>
    <h4 class="fw-600" v-if="level === 3">{{ title }}</h4>
    <div v-if="descriptions"
        v-for="(description, index) in descriptions"
        :key="`desc-${level}-${index}`"
        class="text-darker margin-top-8">
      {{ description }}
    </div>
    <Documentation
      v-for="(item, index) in items"
      :key="`item-${level}-${index}`"
      :title="item.title"
      :descriptions="item.descriptions || []"
      :items="item.items || []"
      :level="level + 1" />
  </div>
</template>

<script>
export default {
  name: 'Documentation',
  props: {
    title: { type: String, default: '' },
    descriptions: { type: Array, default: [] },
    items: { type: Array, default: [] },
    level: { type: Number, default: 0 },
  },
}
</script>