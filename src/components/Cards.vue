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

// Genera le URL delle immagini
const generateImageUrl = (photo) => {
    return cld.image(photo).toURL();
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
            <div class="card" v-for="(photo, index) in photos" :key="index">
                <!-- Mostra il loading-indicator se l'immagine non è ancora caricata -->
                <div v-if="loadingStates[index]" class="loading-indicator"></div>
                <img :src="generateImageUrl(photo)" alt="Photo" draggable="false" @contextmenu.prevent
                    @load="() => handleImageLoad(index)">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    max-height: 80vh;
    overflow-y: auto;
}


.card {
    width: 60%;
    margin-bottom: 30px;
}

.card img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.loading-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top: 5px solid #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 1000; 
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 1050px) {
    .loading-indicator {
        top: 50%;
        left: 45%;
    }

    .card-container {
        max-height: 80vh;
    }
}


@media (max-width: 1368px) and (orientation: landscape) {

    .card-container {
        height: 100vh; /* Imposta l'altezza per occupare l'intera viewport */
        max-height: 80vh;
    }

    .loading-indicator {
        top: 50%;
        left: 50%;
    }
}
</style>