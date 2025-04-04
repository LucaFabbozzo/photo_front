<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json';

const work2Photos = photos.work2.photos;
const work2Title = photos.work2.title;
</script>

<template>
    <div class="container-works">
        <h2>{{ work2Title }}</h2>
        <Cards :photos="work2Photos" />
    </div>
    <Footer />
</template>

<style scoped lang="scss">
@use '../../assets/works.scss';

@media (max-width: 1050px) {
    footer {
        display: none;
    }
}
</style>