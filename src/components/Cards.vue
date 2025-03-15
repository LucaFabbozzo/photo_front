<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';
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

// Stato di caricamento delle immagini
const loading = ref(true);

// Funzione per gestire il caricamento delle immagini
const handleImageLoad = () => {
    loading.value = false;
};

//Variabile per il riferimento al contenitore delle cards
const cardContainer = ref(null);

//Funzione per gestire lo scroll orizzontale con la rotella del mouse
const handleWheel = (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        const scrollAmout = e.deltaY * 5;
        cardContainer.value.scrollLeft += scrollAmout;
    }
};

onMounted(() => {
    if (cardContainer.value) {
        cardContainer.value.addEventListener('wheel', handleWheel);
    }
});

onUnmounted(() => {
    if (cardContainer.value) {
        cardContainer.value.removeEventListener('wheel', handleWheel);
    }
});
</script>

<template>
    <div class="outer-container">
        <div class="card-container" ref="cardContainer">
            <div v-if="loading" class="loading-indicator"></div>
            <div class="card" v-for="(photo, index) in photos" :key="index">
                <img :src="generateImageUrl(photo)" alt="Photo" draggable="false" @contextmenu.prevent
                    @load="handleImageLoad">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.outer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    overflow: hidden;
}


.card-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scrollbar-width: thin; // For Firefox
    scrollbar-color: #74c342 #ffffff; // For Firefox
}

// For Webkit browsers (Chrome, Safari)
.card-container::-webkit-scrollbar {
    height: 8px;
}

.card-container::-webkit-scrollbar-track {
    background: #f6f5f5;
}

.card-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
    border: 2px solid #e0e0e0;
}

.card-container::-webkit-scrollbar-thumb:hover {
    background-color: #555; // Colore della scrollbar quando il cursore è sopra
}

.card {
    flex: 0 0 auto;
    width: 60%;
    margin-right: 5px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}

.card img {
    width: 100%;
    height: auto;
    display: block;
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
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>