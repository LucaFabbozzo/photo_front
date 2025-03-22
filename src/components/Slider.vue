<script setup>
 import { useSlider } from '@/composables/useSlider';
 import { defineProps,  onMounted, onBeforeUnmount  } from 'vue';
 import { AdvancedImage } from "@cloudinary/vue";

 const { prevSlide, nextSlide } = useSlider();

 // Definisci le props
 const props = defineProps({
    slides: {
        type: Array,
        required: true
    }
 });

// Funzione per regolare l'altezza delle immagini solo in modalità landscape
const adjustImageHeight = () => {
    // Verifica se l'orientamento è landscape
    if (window.matchMedia("(orientation: landscape)").matches) {
        const images = document.querySelectorAll('.slider .slide .slides img');
        const viewportHeight = window.innerHeight;

        images.forEach((img) => {
            img.style.height = `${viewportHeight}px`;
        });
    } else {
        // Ripristina l'altezza automatica in modalità portrait
        const images = document.querySelectorAll('.slider .slide .slides img');
        images.forEach((img) => {
            img.style.height = 'auto';
        });
    }
};

// Aggiungi event listener al montaggio e rimuovilo prima dello smontaggio
onMounted(() => {
    adjustImageHeight();
    window.addEventListener('resize', adjustImageHeight);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', adjustImageHeight);
});
</script>


<template>
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
</style>