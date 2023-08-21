<template>
    <div class="background"  :style="{ backgroundImage: 'url(' + background + ')' }">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        background: {
            required: true,
            type: String,
        }
    }
})
</script>

<style scoped>
.background{
    height: 100vh;
    width: 100vw;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>