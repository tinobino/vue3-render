<script lang="ts">
import { defineComponent, h, resolveComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const BContainer = resolveComponent('Container')

    return () => h(BContainer, null, {
      default: () => h('span', 'Test')
    })
  }
})
</script>
