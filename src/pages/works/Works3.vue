<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
import photos from '@/assets/photos/photos.json';

const work3Photos = [...photos.work3.photos].sort((a, b) => a.id - b.id);
const work3Title = photos.work3.title;
</script>

<template>
    <div class="container-works">
        <h2>{{ work3Title }}</h2>
        <Cards :photos="work3Photos"/>
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