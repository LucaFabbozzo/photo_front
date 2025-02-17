<script setup>
 import { useSlider } from '@/composables/useSlider';
 import { defineProps } from 'vue';

 const { prevSlide, nextSlide } = useSlider();

 // Definisci le props
 const props = defineProps({
    slides: {
        type: Array,
        required: true
    }
 });
</script>


<template>
    <section class="slider">
        <div class="slide">
            <div class="slides">
                <div v-for="(slide, index) in props.slides" :key="index" class="box" :class="slide.class">
                    <img :src="slide.src" :alt="slide.alt" />
                </div>
            </div>
        </div>
        <button class="prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/slider.scss";
</style>