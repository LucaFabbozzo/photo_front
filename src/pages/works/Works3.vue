<script setup>
import Footer from '@/components/Footer.vue';
import Cards from '@/components/Cards.vue';
</script>

<template>
    <div class="container-works">
        <h2>Works3</h2>
        <Cards :photos="['work3_photo1.jpg', 'work3_photo2.jpg', 'work3_photo3.jpg']"/>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
    @use '../../assets/works.scss';
</style>