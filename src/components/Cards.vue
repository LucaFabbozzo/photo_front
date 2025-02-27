<script setup>
import { defineProps} from 'vue';
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


</script>

<template>
    <div class="card-container">
        <div class="card" v-for="(photo, index) in photos" :key="index">
            <!-- <img :src="`/src/assets/photos/works/${photo}`" alt="Photo"> -->
            <img :src="generateImageUrl(photo)" alt="Photo" draggable="false" @contextmenu.prevent> 
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scroll-padding: 10px;
    scrollbar-width: auto;
}

.card {
    flex: 0 0 auto;
    width: 80%;
    margin-right: 10px;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}

.card img {
    width: 100%;
    height: auto;
    display: block;
}

</style>