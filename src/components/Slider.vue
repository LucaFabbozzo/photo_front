<script setup>
 import { useSlider } from '@/composables/useSlider';

 const { prevSlide, nextSlide } = useSlider();
</script>


<template>
    <section class="slider">
        <div class="slide">
            <div class="slides">
                <div class="box img_1"></div>
                <div class="box img_2"></div>
                <div class="box img_3"></div>
            </div>
        </div>
        <button class="prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/slider.scss";
</style>