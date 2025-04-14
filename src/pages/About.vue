<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="about-container">
        <div class="book-layout">
            <!-- Pagina sinistra: Foto stile passaporto -->
            <div class="page left-page">
                <img src="" alt="Passport Photo" class="passport-photo" />
            </div>
            <!-- Pagina destra: Biografia -->
            <div class="page right-page">
                <h2>Biografia</h2>
                <p>
                    Amo catturare momenti unici e trasformarli in ricordi indelebili. 
                    La mia missione è condividere la bellezza del mondo attraverso l'obiettivo della mia macchina fotografica.
                </p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/about.scss";
</style>