<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="about-container">
        <section class="about-section">
            <h1>About Us</h1>
            <p>Welcome to our photo gallery! We are passionate about capturing and sharing beautiful moments through photography. Our mission is to provide a platform where photographers can showcase their work and viewers can enjoy stunning visuals from around the world.</p>
        </section>
        <section class="team-section">
            <h2>Our Team</h2>
            <div class="team-member">
                <h3>John Doe</h3>
                <p>Photographer</p>
            </div>
            <div class="team-member">
                <h3>Jane Smith</h3>
                <p>Editor</p>
            </div>
            <!-- Add more team members as needed -->
        </section>
        <section class="contact-section">
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to get in touch, please contact us at <a href="mailto:info@photogallery.com">info@photogallery.com</a>.</p>
        </section>
    </div>
    <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/about.scss";
</style>