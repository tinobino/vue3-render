<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'Container',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: [Boolean, String],
      default: false
    }
  },
  setup (props) {
    const { fluid } = toRefs(props)

    const classes = computed(() => {
      const classes = []
      if (fluid.value) {
        if (typeof fluid.value === 'string') {
          classes.push(`container-${fluid.value}`)
        } else {
          classes.push('container-fluid')
        }
      } else {
        classes.push('container')
      }
      return classes
    })

    return {
      classes
    }
  }
})
</script>
