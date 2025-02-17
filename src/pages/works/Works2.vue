<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
</script>

<template>
    <div class="container-works">
        <h2>Works2</h2>
        <Cards :photos="['work2_photo1.jpg', 'work2_photo2.jpg', 'work2_photo3.jpg']"/>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    @use '../../assets/works.scss';
</style>