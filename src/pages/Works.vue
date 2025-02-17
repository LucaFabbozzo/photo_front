<script setup>
    import { useSlider } from '@/composables/useSlider';

    const { prevSlide, nextSlide } = useSlider();
</script>


<template>
<section class="slider">
        <div class="slide">
            <div class="slides">
                <div class="box img_1"><router-link to="/works/1">First</router-link></div>
                <div class="box img_2"><router-link to="/works/2">Second</router-link></div>
                <div class="box img_3"><router-link to="/works/3">Third</router-link></div>
            </div>
        </div>
        <button class="prev" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="next" @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
        <footer>
            <div class="icons">
                <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.youtube.com" target="_blank"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </footer>
    </section>
</template>


<style scoped lang="scss">
@use "@/assets/slider.scss";
@use "@/assets/footer.scss";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Rowdies:wght@300;400;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

.slides {
    .box {
        a {
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-decoration: none;
            color: white;
            font-family: "Ubuntu", serif;
            font-weight: 400;
            font-style: normal;
            font-size: 40px;
            text-transform: uppercase;
        }
    }
}
</style>