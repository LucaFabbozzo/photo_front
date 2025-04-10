<script setup>
import { defineProps, ref, onMounted} from 'vue';
import { Cloudinary } from '@cloudinary/url-gen';

const props = defineProps({
    photos: {
        type: Array,
        required: true
    }
});

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
});

// Genera le URL delle immagini usando il campo "name"
const generateImageUrl = (photoName) => {
    return cld.image(photoName).toURL();
};

// Stato di caricamento per ogni immagine
const loadingStates = ref(props.photos.map(() => true));

// Funzione per gestire il caricamento di una singola immagine
const handleImageLoad = (index) => {
    loadingStates.value[index] = false;
};

//Variabile per il riferimento al contenitore delle cards
const cardContainer = ref(null);

// Array per tenere traccia di quali card hanno l'effetto shimmer
const shimmerVisibleStates = ref(props.photos.map(() => false));

// Riferimenti agli elementi card
const cardRefs = ref([]);

onMounted(() => {
    if (cardContainer.value) {
        cardContainer.value.scrollTop = 0;
    }

     // Configura l'Intersection Observer
     const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Trova l'indice della card
            const index = cardRefs.value.findIndex(el => el === entry.target);
            if (index === -1) return;
            
            // Se la card è nel viewport e sta entrando dal basso
            if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
                // Attiva l'effetto shimmer
                shimmerVisibleStates.value[index] = true;
                
                // Disattiva l'effetto dopo l'animazione
                setTimeout(() => {
                    shimmerVisibleStates.value[index] = false;
                }, 1000); // La durata dell'animazione shimmer
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1
    });
    
    // Osserva tutte le card
    cardRefs.value.forEach(card => {
        if (card) observer.observe(card);
    });
});

</script>

<template>
    <div class="outer-container">
        <div class="card-container" ref="cardContainer">
            <div    
                class="card" 
                 v-for="(photo, index) in photos" 
                 :key="index.id"
                 :class="{
                    'large-card': index % 3 === 0, 
                    'small-card': index % 3 !== 0, 
                    'shimmer-visible': shimmerVisibleStates[index]
                    }"
                    :ref="el => { cardRefs[index] = el }">

                <!-- Mostra il loading-indicator se l'immagine non è ancora caricata -->
                <div v-if="loadingStates[index]" class="loading-indicator"></div>
                <img :src="generateImageUrl(photo.name)" alt="Photo" draggable="false" @contextmenu.prevent
                    @load="() => handleImageLoad(index)">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/cards.scss";
</style>