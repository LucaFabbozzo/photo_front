<script setup>
    import { openSidebar } from '@/js/sidebar';
</script>

<template>
    <header>
        <button class="open-btn" @click="openSidebar()"><i class="fa-solid fa-bars"></i></button>
    </header>
</template>

<style scoped lang="scss">
.open-btn {
    font-size: 40px;
    background: none;
    border: none;
    color: #BFA252;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 45px;
    z-index: 1;
    transition: transform 0.3s ease, color 0.3s ease;
}

.open-btn:hover {
    transform: scale(1.2);
    color: #725806;
}
</style>