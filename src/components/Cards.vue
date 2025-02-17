<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    photos: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="card-container">
        <div class="card" v-for="(photo, index) in photos" :key="index">
            <img :src="photo" alt="Photo">
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.card {
    flex: 0 0 auto;
    width: 300px;
    margin-right: 16px;
    scroll-snap-align: start;
}

.card img {
    width: 100%;
    height: auto;
    display: block;
}
</style>