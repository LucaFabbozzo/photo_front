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
.outer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}


.card-container {
    display: grid;
    flex-direction: repeat(2, 1fr); /* Due colonne */
    gap: 10px; 
    width: 100%;
    height: 100%;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scrollbar-width: thin;
    max-height: 75vh;
}


.card {
    margin-bottom: 15px;
}


.large-card {
    grid-column: span 2; /* Occupa entrambe le colonne */
    width: 100%;
    height: 650px; /* Altezza maggiore per le immagini grandi */
}

.small-card {
    width: 100%;
    height: 400px; /* Altezza minore per le immagini piccole */
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
    .card-container {
        display: flex;
        flex-direction: column;
        max-height: 100vh;
    }

    .card {
        width: 100%;
        height: 400px; /* Tutte le immagini avranno la stessa altezza */
    }

    .large-card, .small-card {
        grid-column: span 1; /* Rimuove la distinzione tra large e small */
        width: 100%;
        height: 400px; /* Altezza uniforme per tutte le immagini */
    }
}


@media (max-width: 1368px) and (orientation: landscape) {
    .card-container {
        max-height: 100vh;
    }

    .card img {
        width: 100vw; /* Larghezza massima della viewport */
        height: auto; /* Mantiene le proporzioni */
    }

    .loading-indicator {
        top: 50%;
        left: 50%;
    }
}
</style>