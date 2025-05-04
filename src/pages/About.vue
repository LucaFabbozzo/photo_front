<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="about-container">
        <div class="book-layout">
            <!-- Pagina sinistra: Foto stile passaporto -->
            <div class="page left-page">
                <img src="../assets/about.jpg" alt="Passport Photo" class="passport-photo" />
            </div>
            <!-- Pagina destra: Biografia -->
            <div class="page right-page">
                <p>
                    My passion for photography began with capturing the energy and adrenaline of my group of snowboarder and skateboarder friends. With a camera in hand, I immersed myself in that dynamic world, striving to freeze unique and unrepeatable moments.
                    Over time, this passion evolved into a deeper pursuit: telling stories. I started exploring the world, traveling to distant places, and documenting stories I believed were worth sharing. Through my lens, I discovered the power of documentary photography, a tool capable of giving voice to people, cultures, and emotions.
                    This very passion for visual storytelling naturally led me to wedding photography. Every wedding is a unique story, filled with genuine emotions, precious details, and unforgettable moments. With years of experience, I bring a keen eye, artistic sensitivity, and dedication to capturing every detail that makes your day special.
                    I would be honored to tell your story through my images. Let’s talk and create timeless memories together.
                </p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/about.scss";
</style>