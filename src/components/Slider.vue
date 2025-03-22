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
        Lagoluxphoto
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
        <button class="prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/slider.scss";

.site-title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 500;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    pointer-events: none; // Evita che interferisca con i clic

    /* Cornice rettangolare trasparente */
    padding: 20px 40px; // Spaziatura interna
    border: 2px solid rgba(255, 255, 255, 0.7); // Bordo bianco trasparente
    background-color: rgba(0, 0, 0, 0.5); // Sfondo nero trasparente
    border-radius: 10px; // Angoli arrotondati
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); // Ombra per un effetto più elegante
}
</style>