<template>
<reusable-background :background="$route.meta.background">
        <div class="container">
      <h1><b>02</b> meet the crew</h1>

      <SpaceDetail :category="'crew'" />
        </div>
</reusable-background>
</template>

<script lang="ts">
import ReusableBackground from '@/components/ReusableBackground.vue';
import SpaceDetail from '@/components/SpaceDetail.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
ReusableBackground,
SpaceDetail
    },
})
</script>

<style scoped>

</style>