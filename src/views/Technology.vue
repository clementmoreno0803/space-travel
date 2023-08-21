<template>
<reusable-background :background="$route.meta.background">
     <div class="container">
      <h1><b>03</b> space lauch 101</h1>
            <SpaceDetail :category="'technology'" />
     </div>
</reusable-background>
</template>

<script lang="ts">
import ReusableBackground from '@/components/ReusableBackground.vue';
import { defineComponent } from 'vue';
import SpaceDetail from '../components/SpaceDetail.vue'

export default defineComponent({
    components: {
ReusableBackground,
SpaceDetail
    },
})
</script>

<style scoped>

</style>