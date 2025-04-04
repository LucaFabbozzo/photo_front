<script setup>
 import { useSlider } from '@/composables/useSlider';
 import { defineProps} from 'vue';
 import { AdvancedImage } from "@cloudinary/vue";
 import { useRoute } from 'vue-router';


 const { prevSlide, nextSlide } = useSlider();

 // Definisci le props
 const props = defineProps({
    slides: {
        type: Array,
        required: true
    }
 });

 const route = useRoute();
</script>


<template>
    <div v-if="route.name === 'home'" class="site-title">
       <p>L a g o L u x</p>
       <p class="site-title2">artful + events + wedding photography</p>
    </div>

    <section class="slider">
        <div class="slide">
            <div class="slides">
                <div v-for="(slide, index) in props.slides" :key="index" class="box" :class="slide.class">
                    <AdvancedImage :cldImg="slide.src" :alt="slide.alt" draggable="false" @contextmenu.prevent/>
                    <router-link :to="slide.link || '#'">{{ slide.name }}</router-link>
                </div>
            </div>
        </div>
        <div v-if="route.name && route.name.startsWith('work')">
            <button class="prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="next" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/slider.scss";
</style>