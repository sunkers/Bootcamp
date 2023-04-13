<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { meta };
  }
});
</script>
