<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json';

const work3Photos = photos.work3.photos;
</script>

<template>
    <div class="container-works">
        <Cards :photos="work3Photos" />
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/works.scss';

@media (max-width: 1050px) {
    footer {
        display: none;
    }
}
</style>