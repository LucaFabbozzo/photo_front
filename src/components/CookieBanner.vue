<script setup>
import { ref } from 'vue';

// Stato per mostrare/nascondere il banner
const showBanner = ref(!localStorage.getItem('cookiesAccepted'));

// Funzione per accettare i cookie
const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    showBanner.value = false;
};
</script>

<template>
    <div v-if="showBanner" class="cookie-banner">
        <p>
            Questo sito utilizza i cookie per migliorare l'esperienza utente. Continuando a navigare, accetti l'uso dei cookie.
        </p>
        <button @click="acceptCookies">Accetta</button>
    </div>
</template>

<style lang="scss" scoped>
    .cookie-banner {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #000;
        color: #fff;
        padding: 15px;
        text-align: center;
        z-index: 1000;

        button {
            background-color: #bfa252;
            color: #fff;
            border: none;
            padding: 10px 20px;
            margin-left: 15px;
            cursor: pointer;
            border-radius: 5px;
        }

        button:hover {
            background-color: #725806;
        }
    }
</style>