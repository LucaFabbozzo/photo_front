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
const sidebarImage = cld.image('menu_mrzyvq');

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
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Inconsolata:wght@200..900&display=swap" rel="stylesheet');

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    overflow-x: hidden;
    transition: 0.3s;

    .sidebar-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1; // Assicurati che l'immagine sia dietro il contenuto
    }

    .close-btn {
        position: absolute;
        top: 15px;
        right: 40px;
        font-size: 45px;
        background: none;
        border: none;
        color: #BFA252;
        cursor: pointer;
        transition: transform 0.3s ease, color 0.3s ease;

        &.close-btn:hover {
        transform: scale(1.2);
        color: #2b2a27;
        }
    }

    .sidebar-content {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;

        ul {
            list-style-type: none;
            padding: 0;

            li {
                padding: 8px;
                text-align: center;

                a {
                    text-decoration: none;
                    font-size: 50px;
                    font-family: "Inconsolata", monospace;
                    font-weight: 300;
                    text-transform: uppercase;
                    cursor: pointer;
                    color: white;
                    display: inline-block;
                    position: relative;
                    transition: color 0.3s;

                    &:after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        display: block;
                        margin-top: 5px;
                        right: 0;
                        background: #BFA252;
                        transition: width 0.3s ease;
                        -webkit-transition: width 0.3s ease;
                    }

                    &:hover {
                        color: #999898;
                    }

                    &:hover:after {
                        width: 100%;
                        left: 0;
                        background: #999898;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) and (orientation: landscape) {
    .sidebar {
        .sidebar-content {
            top: 15%;
            ul {
                li {
                    a {
                        font-size: 30px;
                    }
                }
            }
        }
    }
}
</style>