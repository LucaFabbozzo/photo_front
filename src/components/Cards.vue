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

onMounted(() => {
    if (cardContainer.value) {
        cardContainer.value.scrollTop = 0;
    }
});

</script>

<template>
    <div class="outer-container">
        <div class="card-container" ref="cardContainer">
            <div    
                class="card" 
                 v-for="(photo, index) in photos" 
                 :key="index.id"
                 :class="{'large-card': index % 3 === 0, 'small-card': index % 3 !== 0}">

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