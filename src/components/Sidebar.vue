<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { closeSidebar } from '@/js/sidebar';
import { Cloudinary } from '@cloudinary/url-gen';

//Configura cloudinary
const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
})

//Crea l'immagine Cloudinary
const sidebarImage = cld.image('home_slide-9064_mk8dvc');

</script>

<template>
    <div id="sidebar" class="sidebar" role="navigation" aria-label="Main Navigation">
        <AdvancedImage :cldImg="sidebarImage" class="sidebar-bg" alt="Sidebar Background" />
        <button class="close-btn" @click="closeSidebar" aria-label="Close Sidebar"><i
                class="fa-solid fa-times"></i></button>
        <div class="sidebar-content">
            <ul>
                <li><router-link to="/" @click="closeSidebar">Home</router-link></li>
                <li><router-link to="/about" @click="closeSidebar">About us</router-link></li>
                <li><router-link to="/works" @click="closeSidebar">Works</router-link></li>
                <li><router-link to="/contacts" @click="closeSidebar">Contacts</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/sidebar.scss";
</style>